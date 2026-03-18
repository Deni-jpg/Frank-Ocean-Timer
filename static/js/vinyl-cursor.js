// vinyl-cursor.js
// Drop this script tag on any page you want the vinyl cursor:
// <script src="{{ url_for('static', filename='js/vinyl-cursor.js') }}"></script>
// The cursor element must exist in the HTML with id="vinyl-cursor"

(function () {
  const cursor = document.getElementById('vinyl-cursor');
  if (!cursor) return;

  // Hide system cursor globally
  const style = document.createElement('style');
  style.textContent = 'html, body, a, button, [role="button"] { cursor: none !important; }';
  document.head.appendChild(style);

  let spinTimer;

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';

    cursor.classList.add('spinning');
    clearTimeout(spinTimer);
    spinTimer = setTimeout(function () {
      cursor.classList.remove('spinning');
    }, 130);
  });

  document.addEventListener('mouseleave', function () {
    cursor.classList.remove('spinning');
  });

  document.addEventListener('mousedown', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.82)';
  });

  document.addEventListener('mouseup', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
})();
