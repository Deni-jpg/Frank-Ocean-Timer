# 1) Imagem base com Python 3.9 leve
FROM python:3.9-slim

# 2) Define /app como diretório de trabalho
WORKDIR /app

# 3) Copia o requirements e instala dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4) Copia todo o restante do seu código
COPY . .

# 5) Expõe a porta que o Flask (ou Gunicorn) usará
EXPOSE 5000

# 6) Comando padrão pra iniciar seu app
#    - assume que em app.py você tenha: app = Flask(__name__)
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
