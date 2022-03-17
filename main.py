from flask import Flask,render_template

site=Flask(__name__)
site.config['SECRET_KEY'] = '23k42k3jf4f3f4kf234lo23f42ou34f23u4f32u4f2k3j4f23iu'
@site.route("/")
def home():
    return render_template("calculus.html")


if __name__ =='__main__':
   site.run(debug=True)
