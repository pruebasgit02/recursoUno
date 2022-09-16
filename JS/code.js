var estado;
var op1;
var op2;
var resultado;
var operacion;

let calculadora = {
    numeroArray : new Array(),
    inicializar : function(){
        estado = " inicializado"
    },
    suma : function(){
        operacion ='adicion';
        estado = 'operando2';
        this.numeroArray=[];

    },
    resta: function(){
        operacion ='resta';
        estado = 'operando2';
        this.numeroArray=[];
        
    },
    division : function(){
        operacion ='division';
        estado = 'operando2';
        this.numeroArray=[];
        
    },
    multiplicacion : function(){
        operacion ='multiplicacion';
        estado = 'operando2';
        this.numeroArray=[];
    },
    ac : function (){
        calculadora.inicializar();
        this.numeroArray =[];
    },
    del : function (){
        this.numeroArray.pop();
        this.proximoNumero();
        this.display;

    },

    igual : function (){
        switch(operacion){
                case 'suma':
        }

    },
    display : function (){

    },

    proximoNumero : function (){

    }



}