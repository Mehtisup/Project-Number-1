
    <!DOCTYPE html>
    <html>
    <head>
    <title>Show Password</title>
    <meta charset="utf-8">
    <meta name="theme-color" content="black">
    <meta name="viewport" content="width=device-width , initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>

    </style>
    </head>
    <body>


    <input type="password" id="A">
    <input type="checkbox" onclick="myFunction()">

    <script>
    function myFunction() {
        var x = document.getElementById("A");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type="password";
        }
    }


    </script>

  
    </body>
    </html>
