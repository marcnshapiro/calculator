var stack_x = "";
var stack = {x:0, y:0, z:0, t:0};
var shifted = false;
var drg = "Deg";
var hyp = false;

var PI = 3.14159265359;
var e = 2.71828182846;

var mem = [0,0,0,0,0,0,0,0,0,0];

var fixDec = 2;
var maxPre = 18;

var fixed = true;


var setDecimalPositions = function() {
  if (fixed) fixDec = document.getElementById("fixDecimals").value;
}
var setMemory = function() {
  var idx = document.getElementById("memNumber").value;
  document.getElementById("memNum").innerHTML = mem[idx];
}

var factorial = function(x) {
  var result = "";
  var num = 1;

  if (x >= 1) {
    for (var i = x; i > 1; i--) {
      num *= i;
    }
    result = fixed ? num.toFixed(fixDec) : num.toString();
  } else {
    if (x === 0) {
      result = fixed ? "1".toFixed(fixDec) : "1";
    } else {
      result = "ERROR!";
    }
  }
  return result;
}

var permutations = function(y,x) {
  var result1 = Number(factorial(y));
  var result2 = Number(factorial(y-x));

  var result = "";

  if  ((result1 === "ERROR!") || (result2 === "ERROR!")) {
    result = "ERROR!";
  } else {
    result = fixed ? (result1/result2).toFixed(fixDec) :  (result1/result2).toString();
  }

  return result
}

var combinations = function(y,x) {
  var result1 = Number(factorial(y));
  var result2 = Number(factorial(y-x));
  var result3 = Number(factorial(x));

  var result = "";

  if  ((result1 === "ERROR!") || (result2 === "ERROR!") || (result3 === "ERROR!")) {
    result = "ERROR!";
  } else {
    result = fixed ? ((result1/result2)/result3).toFixed(fixDec) :  ((result1/result2)/result3).toString();
  }

  return result
}

var updateStatusShifted = function() {
  
  if (shifted) {
    document.getElementById("StatusShift").innerHTML = "Shift";
  } else {
    document.getElementById("StatusShift").innerHTML = "";
  }
}

var updateStatusHyp = function() {
  
  if (hyp) {
    document.getElementById("StatusHyp").innerHTML = "Hyp";
  } else {
    document.getElementById("StatusHyp").innerHTML = "";
  }
}

var chkOverflow = function(stack_x) {
  if ((stack_x.length > maxPre + 1) || ((stack_x.length === maxPre + 1) && stack_x.indexOf(".") === -1)) {
    if (stack_x.indexOf(".") === -1) {
      return "ERR-OVERFLOW!";
    } else {
      if (stack_x.indexOf(".") > maxPre) {
        return "ERR-OVERFLOW!";
      }
      stack_x = stack_x.substr(0, maxPre);
    }
  }

  return stack_x
}

var errorFree = function() {
  if (document.getElementById("Stack_X").innerHTML === "ERR-OVERFLOW!") return false;
  if (document.getElementById("Stack_X").innerHTML === "ERR-FACTORIAL!") return false;
  if (document.getElementById("Stack_X").innerHTML === "ERR-COMBINATION!") return false;
  if (document.getElementById("Stack_X").innerHTML === "ERR-PERMUTATION!") return false;
  if (document.getElementById("Stack_X").innerHTML === "ERR-ZERO-DIV!") return false;
  if (document.getElementById("Stack_X").innerHTML === "ERR-OVERFLOW!") return false;

  return true;
}

var numGood = function(stack_x) {
  if (!errorFree()) return false;
  if ((stack_x.length === maxPre) && (stack_x.indexOf(".") === -1)) return false;
  if (stack_x.length > maxPre) return false;

  return true;
 }

 var appendToX = function(stack_x, key) {
  if (numGood(stack_x)) {
    if ((stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") || ((key === e.toString()) && (stack_x !== "Enter Done")) || ((key === PI.toString()) && (stack_x !== "Enter Done"))) {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if ((stack_x === "Enter Done") || (key === e.toString()) || (key === PI.toString())) {
      stack_x = "";
    }

    stack_x += key;
    document.getElementById("Stack_X").innerHTML = stack_x;

    shifted = false;
    updateStatusShifted();

    return stack_x;
  }
 }

  var doFourBanger = function(stack_x, result) {
   if (errorFree(stack_x)) {
      stack_x = result;
      stack_x = chkOverflow(stack_x);

      document.getElementById("Stack_X").innerHTML = stack_x;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
      stack_x = "";
      shifted = false;
      updateStatusShifted();
    }  

    return stack_x;
  }

  var doTrigFunc = function(stack_x, func) {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        switch (drg) {
          case "Deg":
            x = x * (2 * PI) / 360;
            break;
          case "Grad":
            x = x * (2 * PI) / 400;
        }

        stack_x = fixed ? func(x).toFixed(fixDec) : func(x).toString();
      } else {
        x = func(x);      

        switch (drg) {
          case "Deg":
            x = Math.round(x * 360 / (2 * PI));
            break;
          case "Grad":
            x = Math.round(x * 400 / (2 * PI));
        }

        stack_x = fixed ? x.toFixed(fixDec) : x.toString();
      }

      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
      shifted = false;
      hyp = false;
      updateStatusShifted();
      updateStatusHyp();
    }

    return stack_x;
  }

$(document).ready( function() {
  "use strict";

  $('.fp').click(function () { 
      fixed = ($(this).val() === "fixed");
  });

  $("#Key-0").on("click", function() {
    stack_x = appendToX(stack_x, "0");
  });    

  $("#Key-1").on("click", function() {
    stack_x = appendToX(stack_x, "1");
  });    

  $("#Key-2").on("click", function() {
      if (!shifted) {
        stack_x = appendToX(stack_x, "2");
      } else {
        stack_x = appendToX(stack_x, e.toString());
        stack_x = "";
      }
  });    

  $("#Key-3").on("click", function() {
      if (!shifted) {
        stack_x = appendToX(stack_x, "3");
      } else {
        stack_x = appendToX(stack_x, PI.toString());
        stack_x = "";
      }
  });    

  $("#Key-4").on("click", function() {
    stack_x = appendToX(stack_x, "4");
  });    

  $("#Key-5").on("click", function() {
    stack_x = appendToX(stack_x, "5");
  });    

  $("#Key-6").on("click", function() {
    stack_x = appendToX(stack_x, "6");
  });    

  $("#Key-7").on("click", function() {
    stack_x = appendToX(stack_x, "7");
  });    

  $("#Key-8").on("click", function() {
    stack_x = appendToX(stack_x, "8");
  });    

  $("#Key-9").on("click", function() {
    stack_x = appendToX(stack_x, "9");
  });    

  $("#Key-dp").on("click", function() {
    stack_x = appendToX(stack_x, ".");
  });    

  $("#Key-bs").on("click", function() {
    if (errorFree(stack_x)) {
      stack_x = document.getElementById("Stack_X").innerHTML.substr(0,stack_x.length-1);
    } else {
      stack_x = "";
    }
    document.getElementById("Stack_X").innerHTML = stack_x;
  });    

  $("#Key-enter").on("click", function() {
    if (errorFree(stack_x)) {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;
      stack_x = "Enter Done";
      shifted = false;
      updateStatusShifted();
    }
  });    

  $("#Key-chs").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);
      var y = Number(document.getElementById("Stack_Y").innerHTML);

      stack_x = (-x).toFixed(fixDec);;

      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-cls").on("click", function() {
    stack_x = "";
    
    document.getElementById("Stack_X").innerHTML = "";
    document.getElementById("Stack_Y").innerHTML = "";
    document.getElementById("Stack_Z").innerHTML = "";
    document.getElementById("Stack_T").innerHTML = "";
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-add").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = doFourBanger(stack_x, fixed ? (y+x).toFixed(fixDec) : (y+x).toString());
  });    

  $("#Key-sub").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = doFourBanger(stack_x, fixed ? (y-x).toFixed(fixDec) : (y-x).toString());
  });    

  $("#Key-mult").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = doFourBanger(stack_x, fixed ? (y*x).toFixed(fixDec) : (y*x).toString());
  });    

  $("#Key-div").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = doFourBanger(stack_x, fixed ? (y/x).toFixed(fixDec) : (y/x).toString());
  });    

  $("#Key-shift").on("click", function() {
    if (errorFree(stack_x)) {
      shifted = !shifted;
      updateStatusShifted();
    } 
  });

  $("#Key-drg").on("click", function() {
    if (errorFree(stack_x)) {
      switch (drg) {
        case "Deg":
          drg = "Rad";
          break;
        case "Rad":
          drg = "Grad";
          break;
        case "Grad":
          drg = "Deg";
      }

      document.getElementById("StatusDRG").innerHTML = drg;

      if (shifted) {
        var x = Number(document.getElementById("Stack_X").innerHTML);

        switch (drg) {
          case "Deg":
            stack_x = (x * 360 / 400).toFixed(fixDec);
          case "Rad":
            stack_x = (x * (2 * PI) / 360).toFixed(fixDec);
            break;
          case "Grad":
            stack_x = (x * 400 / (2 * PI)).toFixed(fixDec);
        }
      }
      document.getElementById("Stack_X").innerHTML = stack_x;
      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-npr").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);
      var y = Number(document.getElementById("Stack_Y").innerHTML);

      if (!shifted) {
        stack_x = permutations(y,x);
      } else {
        stack_x = combinations(y,x);
      }

      stack_x = chkOverflow(stack_x);
 
      if  (stack_x === "ERROR!") {        
        if (!shifted) {
          stack_x = "ERR-PERMUTATION!";
        } else {
          stack_x = "ERR-COMBINATION!";
        }
      }    document.getElementById("Stack_X").innerHTML = stack_x;

      if  ((stack_x !== "ERR-PERMUTATION!") && (stack_x !== "ERR-PERMUTATION!")) {
        stack_x = "";
      }

      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;           
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-mr").on("click", function() {
    if (errorFree(stack_x)) {
      if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
        document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
        document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
        document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
      }

      var idx = document.getElementById("memNumber").value;
      stack_x = mem[idx].toFixed(fixDec);
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-ms").on("click", function() {
    if (errorFree(stack_x)) {
      var idx = document.getElementById("memNumber").value;
      mem[idx] = Number(document.getElementById("Stack_X").innerHTML);
      document.getElementById("memNum").innerHTML = mem[idx];
      stack_x = "";
      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-mp").on("click", function() {
    if (errorFree(stack_x)) {
      var idx = document.getElementById("memNumber").value;
      if (!shifted) {
        mem[idx] += Number(document.getElementById("Stack_X").innerHTML);
      }else {
        mem[idx] -= Number(document.getElementById("Stack_X").innerHTML);
      }

      document.getElementById("memNum").innerHTML = mem[idx];

      temp = chkOverflow(mem[idx]);
      if (temp === "ERR-OVERFLOW!") {
        document.getElementById("Stack_X").innerHTML = temp;
        stack_x = "";
        mem[idx] = 0;
        document.getElementById("memNum").innerHTML = mem[idx];
      }

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-hyp").on("click", function() {
    if (errorFree(stack_x)) {
      hyp = !hyp;
      updateStatusHyp();
    }
  });

  $("#Key-sin").on("click", function() {
    if (!shifted) {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.sin);
      } else {
        stack_x = doTrigFunc(stack_x, Math.sinh);
      }
    } else {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.asin);
      } else {
        stack_x = doTrigFunc(stack_x, Math.asinh);
      }      
    }
  });

  $("#Key-cos").on("click", function() {
    if (!shifted) {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.cos);
      } else {
        stack_x = doTrigFunc(stack_x, Math.cosh);
      }
    } else {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.acos);
      } else {
        stack_x = doTrigFunc(stack_x, Math.acosh);
      }      
    }
  });

  $("#Key-tan").on("click", function() {
    if (!shifted) {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.tan);
      } else {
        stack_x = doTrigFunc(stack_x, Math.tanh);
      }
    } else {
      if (!hyp) {
        stack_x = doTrigFunc(stack_x, Math.atan);
      } else {
        stack_x = doTrigFunc(stack_x, Math.atanh);
      }      
    }
 });

  $("#Key-ln").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        stack_x = fixed ? Math.log(x).toFixed(fixDec) : Math.log(x).toString();
      } else {
        stack_x = fixed ? Math.exp(x).toFixed(fixDec) : Math.exp(x).toString();
        stack_x = chkOverflow(stack_x);
      }
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-log").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        stack_x = fixed ? Math.log10(x).toFixed(fixDec) : Math.log10(x).toString();
      } else {
        stack_x = fixed ? Math.pow(10, x).toFixed(fixDec) : Math.pow(10, x).toString()
        stack_x = chkOverflow(stack_x);
      }
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-yx").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);
      var y = Number(document.getElementById("Stack_Y").innerHTML);

      if (!shifted) {
        stack_x = fixed ? Math.pow(y, x).toFixed(fixDec) : Math.pow(y, x).toString();
      } else {
        stack_x = fixed ? Math.pow(y, 1/x).toFixed(fixDec) : Math.pow(y, 1/x).toString();
     }

      stack_x = chkOverflow(stack_x);
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-root").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        stack_x = fixed ? Math.pow(x, 1/2).toFixed(fixDec) : Math.pow(x, 1/2).toString();
      } else {
        stack_x = fixed ? Math.pow(x, 1/3).toFixed(fixDec) : Math.pow(x, 1/3).toString();
      }

      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-x2").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        stack_x = fixed ? Math.pow(x, 2).toFixed(fixDec) : Math.pow(x, 2).toString();
      } else {
        stack_x = fixed ? Math.pow(x, 3).toFixed(fixDec) : Math.pow(x, 3).toString();
      }

      stack_x = chkOverflow(stack_x);
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-pct").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);
      var y = Number(document.getElementById("Stack_Y").innerHTML);

      if (!shifted) {
        stack_x = fixed ? (y * x / 100).toFixed(fixDec) : (y * x / 100).toString();
        stack_x = chkOverflow(stack_x);
        document.getElementById("Stack_X").innerHTML = stack_x;
        if (stack_x !== "ERR-OVERFLOW!") {
          stack_x = "";
        }
      } else {
        if (x != 0) {
          stack_x = fixed ? (1/x).toFixed(fixDec) : (1/x).toString();
          stack_x = chkOverflow(stack_x);
          document.getElementById("Stack_X").innerHTML = stack_x;
          if (stack_x !== "ERR-OVERFLOW!") {
            stack_x = "";
          }
        } else {
          stack_x = "ERR-ZERO-DIV!";
          document.getElementById("Stack_X").innerHTML = stack_x;
          //stack_x = "Enter Done";
        }
      }

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-rolldown").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);

      if (!shifted) {
        document.getElementById("Stack_X").innerHTML = document.getElementById("Stack_Y").innerHTML;
        document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
        document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
        document.getElementById("Stack_T").innerHTML = x;
      } else {
        document.getElementById("Stack_X").innerHTML = document.getElementById("Stack_Y").innerHTML;
        document.getElementById("Stack_Y").innerHTML = x;      
      }

      shifted = false;
      updateStatusShifted();
    }
  });

  $("#Key-fact").on("click", function() {
    if (errorFree(stack_x)) {
      var x = Number(document.getElementById("Stack_X").innerHTML);
      var y = Number(document.getElementById("Stack_Y").innerHTML);

      if (!shifted) {
        stack_x = factorial(x);
        stack_x = chkOverflow(stack_x);
        if (stack_x === "ERROR!") {
          stack_x = "ERR-FACTORIAL!";
        }        
        document.getElementById("Stack_X").innerHTML = stack_x;
      } else {
        if (x != 0) {
          stack_x = fixed ? (y - Math.floor(y/x)*x).toFixed(fixDec) : (y - Math.floor(y/x)*x).toString();
        } else {
          stack_x = "ERR-ZERO-DIV!";
        }
        document.getElementById("Stack_X").innerHTML = stack_x;
        document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;           
        document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;      
      }
      if (stack_x !== "ERR-ZERO-DIV!") {
        stack_x = "";
      }

      shifted = false;
      updateStatusShifted();
    }
  });
});

