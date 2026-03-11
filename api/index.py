from flask import Flask, render_template, redirect, send_from_directory, url_for
from datetime import datetime
import os

app = Flask(__name__, template_folder='../templates', static_folder='../static')

# configuração dos álbuns
ALBUMS = {
    'blonde': {
        'title': 'Blonde',
        'date': datetime(2016, 8, 20)
    },
    'endless': {
        'title': 'Endless',
        'date': datetime(2016, 8, 19)
    },
    'channel-orange': {
        'title': 'Channel Orange',
        'date': datetime(2012, 7, 10)
    }
}

@app.route('/')
def home():
    # redireciona para a primeira aba (Blonde)
    return redirect(url_for('album', album='blonde'))

@app.route('/<album>')
def album(album):
    if album not in ALBUMS:
        # se não existir, volta pra Blonde
        return redirect(url_for('album', album='blonde'))

    data = ALBUMS[album]
    # ISO string para o JS
    release_iso = data['date'].isoformat()
    return render_template(
        'index.html',
        albums=ALBUMS,
        selected=album,
        album_title=data['title'],
        release_date=release_iso
    )

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory(os.path.join(app.root_dir, 'static'), 'sitemap.xml')

@app.route('/robots.txt')
def robots():
    return send_from_directory(os.path.join(app.root_dir, 'static'), 'robots.txt')

if __name__ == '__main__':
    app.run(debug=True)
