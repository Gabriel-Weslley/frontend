import styled from 'styled-components';

export const Container = styled.div`

* {
  margin: auto;
  text-align:center;
  align-self:center;
}
section{
  padding-bottom:200px;
  margin-top:300px;
  heigth: 400px;
  width: 600px;
}
form{
  display: inline-block;
  height: 60%;
  margin-top:50px;
 
}
input{
  margin: 10px;
}
.botoes{
  background: #fff;
  width: 200px;
  height: 40px;
}
p{
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}
label{
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
@media only screen and (max-width: 800px){

  section{
    padding-bottom:100px;
    margin-top:300px;
    height: 200px;
    width: 400px;
  }
  form{
    display: inline-block;
    height: 40%;
    margin-top:50px;
   
  }
  .botoes{
    background: #fff;
    width: 100px;
    height: 40px;
  }
`;