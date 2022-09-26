<?php 

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php?operation=getchallenge&username=prueba",
        CURLOPT_RETURNTRANSFER => true
    ));

    $response = curl_exec($curl);

    curl_close($curl);

    $objeto = json_decode($response);

    return $objeto;