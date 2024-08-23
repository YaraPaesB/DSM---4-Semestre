#Aula 002

#Operadores Aritméticos
7+2      	#soma
7-2      	#subtração
7*2      	#multiplicação
7/2      	#divisão
7%/%2   #parte inteira da divisão
7%%2     #resto da divisão
7^2      	#potenciação
9^(1/360)  	#radiciação com indice 360
sqrt(9)  	#raiz quadrada

#Operadores lógicos
3==3      	#igualdade
3>=4      	#desigualdade - maior e igualdade
3>4       	#desigualdade - maior
3<=4      	#desigualdade - menor e igual
3<4       	#desigualdade - menor
3!=3      	#diferente      

#Atribuir valor a uma variável
x<-4    #atribui valor 4 a variável x
x          #apresenta no console o valor
x<-1

#funcao
calcula<-function(x){
  y<-x+1
  return(y)
}
calcula2<-function(x) {
  y <- x+1
  y <- y^2
  return(y)
}

mediax <- (2+2+5+7+8+9+20)/7
mediay <- (3+3+4+5+5+7+8+9+9+14)/10
mediaz <- (2.34+4.56+5.35+6.45)/4


calcula2(x)
