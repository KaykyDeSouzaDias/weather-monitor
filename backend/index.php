<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$apiKey = getenv('OPENWEATHER_API_KEY');
$latitude = 22.54;
$longitude = 43.10;

if (!$apiKey) {
    echo json_encode(["error" => "API Key não configurada"]);
    exit;
}

$apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={$latitude}&lon={$longitude}&appid={$apiKey}";

$response = file_get_contents($apiUrl);

echo $response;
?>