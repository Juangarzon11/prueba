<?php

    include('./getchallenge.php');

    $accessKey = md5($data->result->token.'3DlKwKDMqPsiiK0B');

    $params = array('operation' => 'login', 'username' => 'prueba', 'accessKey' => $accessKey);

    $post_params = http_build_query($params);

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => 1, 
        CURLOPT_POSTFIELDS => $post_params,
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/x-www-form-urlencoded'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    
    $session = json_decode($response);

    return $session;

?>