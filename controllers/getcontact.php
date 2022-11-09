<?php

    include('./getsession.php');

    $sessionName = $session->result->sessionName;

    $URL = "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php?operation=query&sessionName=".$sessionName."&query=select%20*%20from%20Contacts;";
    
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $URL,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_RETURNTRANSFER => true
    ));

    $response = curl_exec($curl);

    echo $response;

?>