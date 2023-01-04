from decompressor import db


class User(db.Model):
    """ User table. should also contain image_file"""
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(120), nullable = False, unique=True)
    password = db.Column(db.String(), nullable = False)
    images = db.relationship('Images', backref='user')



    def __repr__(self):
        """ string represenattion of the class User """
        return f"User({self.username}, {self.email}"
    

    def save(self):
        """ function to save an instance of user """
        db.session.add(self)
        db.session.commit()

    
    def delete(self):
        """ function to delete an instance of user """
        db.session.delete(self)
        db.session.commit()


    def update(self, username):
        """ function to change username"""
        self.username = username

        db.session.commit()


class Images(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    image = db.Column(db.BLOB())
    imageFilename = db.Column(db.String())
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), nullable=False)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        """ function to delete an instance of user """
        db.session.delete(self)
        db.session.commit()