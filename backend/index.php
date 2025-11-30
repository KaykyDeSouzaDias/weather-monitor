<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$apiKey = getenv('OPENWEATHER_API_KEY');
$latitude = $_GET['lat'] ?? null;
$longitude = $_GET['lon'] ?? null;

if (!$apiKey) {
    http_response_code(400);
    echo json_encode(["error" => "API Key não configurada"]);
    exit;
}
if (!$latitude || !$longitude) {
    http_response_code(400);
    echo json_encode(["error" => "Latitude e Longitude são obrigatórias"]);
    exit;
}

$latitudeFormatted = htmlspecialchars($latitude);
$longitudeFormatted = htmlspecialchars($longitude);

$apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={$latitudeFormatted}&lon={$longitudeFormatted}&appid={$apiKey}";

$response = file_get_contents($apiUrl);

echo $response;
?>