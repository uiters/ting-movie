<?php
class Request {
    private $data;

    public function __construct($data) {
        $this->data = $data;
    }

    public function post() {
        $data = $this->data;
        $url = 'https://www.123phim.vn/apitomapp';
        $options = array(
            'http' => array(
                'header'  => [ 
                'Content-type: application/json',
                'Content-Length: ' . strlen($data)
                ],
                'method'  => 'POST',
                'content' => $data
            )
        );

        $context  = stream_context_create($options);
        return file_get_contents($url, false, $context);
    }
}
?>