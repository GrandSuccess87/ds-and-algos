<!DOCTYPE HTML>
<html>
<head>
  <title>JSONEditor | Basic usage</title>

  <!-- <link href="../dist/jsoneditor.css" rel="stylesheet" type="text/css">
  <script src="../dist/jsoneditor.js"></script> -->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.5.0/jsoneditor.css" rel="stylesheet" type="text/css">
    <link href="/css/jsoneditor.local.css" rel="stylesheet" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.5.0/jsoneditor.min.js"></script>
    <script src="/js/jsoneditor.local.js"></script>


  <style type="text/css">
    #jsoneditor {
      width: 500px;
      height: 500px;
    }
  </style>
</head>
<body>
<p>
  <button id="setJSON">Set JSON</button>
  <button id="getJSON">Get JSON</button>
</p>
<div id="jsoneditor"></div>

<script>
    // var JSONEditor;
  // create the editor
  const container = document.getElementById('jsoneditor')
  const options = {}
  const editor = new JSONEditor(container, options)

  // set json
  document.getElementById('setJSON').onclick = function () {
    const json = {
      'array': [1, 2, 3],
      'boolean': true,
      'color': '#82b92c',
      'null': null,
      'number': 123,
      'object': {'a': 'b', 'c': 'd'},
      'string': 'Hello World'
    }
    editor.set(json)
  }

  // get json
  document.getElementById('getJSON').onclick = function () {
    const json = editor.get()
    alert(JSON.stringify(json, null, 2))
  }
</script>
</body>
</html>
