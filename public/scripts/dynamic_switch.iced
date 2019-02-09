document.getElementById('home').addEventListener 'click', ->
  document.getElementById('iframe').src = 'home.html'
  return
document.getElementById('projects').addEventListener 'click', ->
  document.getElementById('iframe').src = 'projects.html'
  return
document.getElementById('gallery').addEventListener 'click', ->
  document.getElementById('iframe').src = 'gallery.html'
  return