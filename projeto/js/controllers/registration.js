//VOCE SÓ PRECISA CRIAR O NG-APP UMA VEZ, APÓS ISSO VOCE PODE USAR A MESMA VARIAVEL, A MENOS QUE QUEIRA TER MAIS DE UM PARA AÇÕES EM PAGINAS DIFERENTES
app.controller("RegistrationController",["$scope",function($scope){
    $scope.mensagem = "Bem Vindo";
}])