from flask import Flask, jsonify, request
from flask_cors import CORS
 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
 
app=Flask(__name__)
CORS(app)
 
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:@localhost/flaskmysql'
#                                               user:clave@localhost/nombreBaseDatos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)
 
# defino la tabla
class Juez(db.Model):   # la clase Juez hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    apellido=db.Column(db.String(255))
    nombre=db.Column(db.String(255))
    direccion=db.Column(db.String(255))
    ciudad=db.Column(db.String(255))
    email=db.Column(db.String(255))
    telefono=db.Column(db.String(255))

    
 
    def __init__(self,apellido,nombre,direccion,ciudad,email,telefono):   #crea el  constructor de la clase
        self.apellido=apellido   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.nombre=nombre
        self.direccion=direccion
        self.ciudad=ciudad
        self.email=email
        self.telefono=telefono

db.create_all()  # crea las tablas
#  ************************************************************
class JuezSchema(ma.Schema):
    class Meta:
        fields=('juez_id','apellido','nombre','direccion','ciudad','email','telefono')
 
juez_schema=JuezSchema()            # para crear un producto
jueces_schema=JuezSchema(many=True)  # multiples registros

 #Crea los endpoint o rutas (json)
@app.route('/jueces',methods=['GET'])
def get_Jueces():
    all_jueces=Juez.query.all()     # query.all() lo hereda de db.Model
    result=jueces_schema.dump(all_jueces)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 

 #Crea los endpoint o rutas (json)
@app.route('/jueces/<id>',methods=['GET'])
def get_juez(id):
    juez=Juez.query.get(id)
    return Juez.jsonify(juez)
 

@app.route('/juez/<id>',methods=['DELETE'])
def delete_juez(id):
    juez=Juez.query.get(id)
    db.session.delete(juez)
    db.session.commit()
    return juez_schema.jsonify(juez)

@app.route('/jueces', methods=['POST']) # crea ruta o endpoint
def create_juez():
    print(request.json)  # request.json contiene el json que envio el cliente
    apellido=request.json['apellido']
    nombre=request.json['nombre']
    direccion=request.json['direccion']
    ciudad=request.json['ciudad']
    email=request.json['email']
    telefono=request.json['telefono']
    new_juez=Juez(apellido,nombre,direccion,ciudad,email,telefono)
    db.session.add(new_juez)
    db.session.commit()
    return juez_schema.jsonify(new_juez)


@app.route('/jueces/<id>' ,methods=['PUT'])
def update_producto(id):
    juez=Juez.query.get(id)
    apellido=request.json['apellido']
    nombre=request.json['nombre']
    direccion=request.json['direccion']
    ciudad=request.json['ciudad']
    email=request.json['email']
    telefono=request.json['telefono']
    juez.apellido=apellido
    juez.nombre=nombre
    juez.direccion=direccion
    juez.ciudad=ciudad
    juez.email=email
    juez.telefono=telefono
    db.session.commit()
    return juez_schema.jsonify(juez)




# programa principal
if __name__=='__main__':  
    app.run(debug=True, port=5000)  