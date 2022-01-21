var amount 
function next(){
    amount = document.getElementById('amount').value;
    if(amount >=100&&amount<=100000){
        document.getElementById('amountscreen1').style.display = "none";
        document.getElementById('amountscreen2').style.display = "none";
        document.getElementById('choosescreen').style.display = "block";
        document.getElementById('resultsscreen').style.display = "none";
    }else{
        alert("Please provide a valid amount.")
    }
}
function func() {
    var abc = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var a500 = 0;
    var a100 = 0;
    var a50 = 0;
    var a20 = 0;
    var a10 = 0;
    var a5 = 0;
    var a1 = 0;

    do {
        //500 start
        if (abc == 500) {
            for (var i = 0; i < 200; i++) {
                if (a500 < 200) {
                    if (amount >= 500) {
                        amount = amount -= 500
                        a500 = a500 + 1
                    }
                }
            }
            if (amount >= 100) {
                if (a100 != 200) {
                    amount = amount -= 100
                    a100 = a100 + 1
                }
            } else if (amount >= 50) {
                if (a50 != 200) {
                    amount = amount -= 50
                    a50 = a50 + 1
                }
            } else if (amount >= 20) {
                if (a20 != 200) {
                    amount = amount -= 20
                    a20 = a20 + 1
                }
            } else if (amount >= 10) {
                if (a10 != 200) {
                    amount = amount -= 10
                    a10 = a10 + 1
                }
            } else if (amount >= 5) {
                if (a5 != 200) {
                    amount = amount -= 5
                    a5 = a5 + 1
                }
            } else if (amount >= 1) {
                if (a1 != 200) {
                    amount = amount - 1
                    a1 = a1 + 1
                }
            }
            //500 end
            //100 start
        } else if (abc == 100) {
            for (var i = 0; i < 200; i++) {
                if (a100 < 200) {
                    if (amount >= 100) {
                        amount = amount -= 100
                        a100 = a100 + 1
                    }
                }
            }
            if (amount >= 500) {
                if (a500 != 200) {
                    amount = amount -= 500
                    a500 = a500 + 1
                }
            } else if (amount >= 50) {
                if (a50 != 200) {
                    amount = amount -= 50
                    a50 = a50 + 1
                }
            } else if (amount >= 20) {
                if (a20 != 200) {
                    amount = amount -= 20
                    a20 = a20 + 1
                }
            } else if (amount >= 10) {
                if (a10 != 200) {
                    amount = amount -= 10
                    a10 = a10 + 1
                }
            } else if (amount >= 5) {
                if (a5 != 200) {
                    amount = amount -= 5
                    a5 = a5 + 1
                }
            } else if (amount >= 1) {
                if (a1 != 200) {
                    amount = amount - 1
                    a1 = a1 + 1
                }
            }
            //100 end
            //50 start
        } else if (abc == 50) {
            for (var i = 0; i < 200; i++) {
                if (a50 < 200) {
                    if (amount > 50) {
                        amount = amount -= 50
                        a50 = a50 + 1
                    }
                }
            }
            if (amount >= 500) {
                if (a500 != 200) {
                    amount = amount -= 500
                    a500 = a500 + 1
                }
            } else if (amount >= 100) {
                if (a100 != 200) {
                    amount = amount -= 100
                    a100 = a100 + 1
                }
            } else if (amount >= 20) {
                if (a20 != 200) {
                    amount = amount -= 20
                    a20 = a20 + 1
                }
            } else if (amount >= 10) {
                if (a10 != 200) {
                    amount = amount -= 10
                    a10 = a10 + 1
                }
            } else if (amount >= 5) {
                if (a5 != 200) {
                    amount = amount -= 5
                    a5 = a5 + 1
                }
            } else if (amount >= 1) {
                if (a1 != 200) {
                    amount = amount - 1
                    a1 = a1 + 1
                }
            }
            //50 end
            //20 start
        } else if (abc == 20) {
            for (var i = 0; i < 200; i++) {
                if (a20 < 200) {
                    if (amount >= 20) {
                        amount = amount -= 20
                        a20 = a20 + 1
                    }
                }
            }
            if (amount >= 500) {
                if (a500 != 200) {
                    amount = amount -= 500
                    a500 = a500 + 1
                }
            } else if (amount >= 100) {
                if (a100 != 200) {
                    amount = amount -= 100
                    a100 = a100 + 1
                }
            } else if (amount >= 50) {
                if (a50 != 200) {
                    amount = amount -= 50
                    a50 = a50 + 1
                }
            } else if (amount >= 10) {
                if (a10 != 200) {
                    amount = amount -= 10
                    a10 = a10 + 1
                }
            } else if (amount >= 5) {
                if (a5 != 200) {
                    amount = amount -= 5
                    a5 = a5 + 1
                }
            } else if (amount >= 1) {
                if (a1 != 200) {
                    amount = amount - 1
                    a1 = a1 + 1
                }
            }
            //20 end 
            //10 start
        } else if (abc == 10) {
            for (var i = 0; i < 200; i++) {
                if (a10 < 200) {
                    if (amount >= 10) {
                        amount = amount -= 10
                        a10 = a10 + 1
                    }
                }
            }
            if (amount >= 500) {
                if (a500 != 200) {
                    amount = amount -= 500
                    a500 = a500 + 1
                }
            } else if (amount >= 100) {
                if (a100 != 200) {
                    amount = amount -= 100
                    a100 = a100 + 1
                }
            } else if (amount >= 50) {
                if (a50 != 200) {
                    amount = amount -= 50
                    a50 = a50 + 1
                }
            } else if (amount >= 20) {
                if (a20 != 200) {
                    amount = amount -= 20
                    a20 = a20 + 1
                }
            } else if (amount >= 5) {
                if (a5 != 200) {
                    amount = amount -= 5
                    a5 = a5 + 1
                }
            } else if (amount >= 1) {
                if (a1 != 200) {
                    amount = amount - 1
                    a1 = a1 + 1
                }
            }
            //10 end 
        }

    } while (amount != 0);
    document.getElementById("r500").innerHTML = a500;
    document.getElementById("r100").innerHTML = a100;
    document.getElementById("r50").innerHTML = a50;
    document.getElementById("r20").innerHTML = a20;
    document.getElementById("r10").innerHTML = a10
    document.getElementById("r5").innerHTML = a5;
    document.getElementById("r1").innerHTML = a1;
    console.log(a500)
    console.log(a100)
    console.log(a50)
    console.log(a20)
    console.log(a10)
    console.log(a5)
    console.log(a1)
    console.log(document.querySelector('input[name="flexRadioDefault"]:checked').value);
    document.getElementById('amountscreen1').style.display = "none";
    document.getElementById('amountscreen2').style.display = "none";
    document.getElementById('choosescreen').style.display = "none";
    document.getElementById('resultsscreen').style.display = "block";
}
function neu(){
    document.getElementById('amount').value = null;
    document.getElementById('amountscreen1').style.display = "block";
    document.getElementById('amountscreen2').style.display = "flex";
    document.getElementById('choosescreen').style.display = "none";
    document.getElementById('resultsscreen').style.display = "none";
}