# Usa una imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de requerimientos y lo instala
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de la aplicación al contenedor
COPY . .

# Expone el puerto que va a usar la aplicación
EXPOSE 3000

# Establece el comando por defecto para ejecutar la aplicación
CMD ["python", "app.py"]