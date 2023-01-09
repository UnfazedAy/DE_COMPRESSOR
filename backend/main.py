from decompressor import app
from os import getenv


if __name__ == "__main__":
    port = getenv('PORT')
    if not port:
        port = '5000'
    app.run(debug=True, host='0.0.0.0', port=port)
