from flask import (
    Blueprint, 
    render_template, 
    request, 
    redirect, 
    url_for,
    current_app,
    Flask,
    send_file
)

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('portafolio/index.html')

    

@app.route('/mail')
def mail():
        return render_template('portafolio/sent_mail.html')

@app.route('/download')
def download():
    path = 'download/Curriculum.pdf'
    return send_file(path, as_attachment=True)
        
if __name__ == "__main__":
	app.run(debug=True, port=3000)