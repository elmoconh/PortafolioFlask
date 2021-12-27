from flask import (
    Blueprint, 
    render_template, 
    request, 
    redirect, 
    url_for,
    current_app,
    Flask
)

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('portafolio/index.html')
    

@app.route('/mail')
def mail():
        return render_template('portafolio/sent_mail.html')
        
if __name__ == "__main__":
	app.run()
