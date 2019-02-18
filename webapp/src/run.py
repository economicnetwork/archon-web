
from flask import Flask
from logutils import setup_logger
from archonweb import archonweb

def create_app():
    """Create and instance of the the pyDEX app from config"""
    # create an instance of the app
    app = Flask(__name__)
    # configure the app from the config
    #app.config.from_object(config)
    # override the logger to write to command line and file
    app.logger = setup_logger("archonwe_app", "archonweb_app.log")

    # configure the database with the app
    #db.init_app(app)

    """
    # The following is a hack to make sure the DB is created on init
    with app.app_context():
        db.create_all()
    """

    # import all blueprints and register them with the app
    #from pydex_app.sra_routes import sra
    app.register_blueprint(archonweb)

    return app

if __name__ == "__main__":
    APP = create_app()
    APP.logger.info("starting pydex...")
    APP.run(host="0.0.0.0", port=3000, debug=True)