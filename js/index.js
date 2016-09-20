var stack_x = "";
var stack_y = "";
var stack_z = "";
var stack_t = "";

var shifted = false;
var drg = "Deg";
var hyp = false;

var PI = 3.1415926535897932384626433;
var e = 2.718281828459045;

var mem = [0,0,0,0,0,0,0,0,0,0];

var factorial = function(x) {
  var result = "";
  var num = 1;

  if (x >= 1) {
    for (var i = x; i > 1; i--) {
      num *= i;
    }
    result = num.toString();
  } else {
    if (x === 0) {
      result = "1";
    } else {
      result = "ERROR!";
    }
  }
  return result;
}

var permutations = function(y,x) {
  var result1 = factorial(y);
  var result2 = factorial(y-x);

  var result = "";

  if  ((result1 === "ERROR!") || (result2 === "ERROR!")) {
    result = "ERROR!";
  } else {
    result = (result1/result2).toString();
  }

  return result
}

var combinations = function(y,x) {
  var result1 = factorial(y);
  var result2 = factorial(y-x);
  var result3 = factorial(x);

  var result = "";

  if  ((result1 === "ERROR!") || (result2 === "ERROR!") || (result3 === "ERROR!")) {
    result = "ERROR!";
  } else {
    result = ((result1/result2)/result3).toString();
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

$
$(document).ready( function() {
  "use strict";

  $("#Key-0").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "0"
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-1").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "1"
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-2").on("click", function() {
    if ((stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") || (shifted)) {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    if (!shifted) {
      stack_x += "2";
      document.getElementById("Stack_X").innerHTML = stack_x;
    } else {
      stack_x = e.toString();
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
    }
    
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-3").on("click", function() {
    if ((stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") || (shifted)) {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    if (!shifted) {
      stack_x += "3";
      document.getElementById("Stack_X").innerHTML = stack_x;
    } else {
      stack_x = PI.toString();
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
    }
    
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-4").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "4";
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-5").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x ==="Enter Done") {
      stack_x = "";
    }
    stack_x += "5";
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-6").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x ==="Enter Done") {
      stack_x = "";
    }
    stack_x += "6";
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-7").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "7"
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-8").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "8"
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-9").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "9"
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-dp").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }
    if (stack_x === "Enter Done") {
      stack_x = "";
    }
    stack_x += "."
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
 });    

  $("#Key-bs").on("click", function() {
    stack_x = document.getElementById("Stack_X").innerHTML.substr(0,stack_x.length-1);;
    document.getElementById("Stack_X").innerHTML = stack_x;
  });    

  $("#Key-enter").on("click", function() {
    document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;
    stack_x = "Enter Done";
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-add").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = String(y+x);

    document.getElementById("Stack_X").innerHTML = stack_x;
    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-sub").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = String(y-x);

    document.getElementById("Stack_X").innerHTML = stack_x;
    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-mult").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = String(y*x);

    document.getElementById("Stack_X").innerHTML = stack_x;
    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-div").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = String(y/x);

    document.getElementById("Stack_X").innerHTML = stack_x;
    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });    

  $("#Key-chs").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    stack_x = String(-x);

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-cls").on("click", function() {
    stack_x = "";
    stack_y = "";
    stack_z = "";
    stack_t = "";

    document.getElementById("Stack_X").innerHTML = stack_x;
    document.getElementById("Stack_Y").innerHTML = stack_y;
    document.getElementById("Stack_Z").innerHTML = stack_z;
    document.getElementById("Stack_T").innerHTML = stack_t;
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-shift").on("click", function() {
    shifted = !shifted;
    updateStatusShifted();
  });

  $("#Key-drg").on("click", function() {
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
          stack_x = (x * 360 / 400).toString();
          break;
        case "Rad":
          stack_x = (x * (2 * PI) / 360).toString();
          break;
        case "Grad":
          stack_x = (x * 400 / (2 * PI)).toString();
      }
    }
    document.getElementById("Stack_X").innerHTML = stack_x;
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-npr").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    if (!shifted) {
      stack_x = permutations(y,x);
    } else {
      stack_x = combinations(y,x);
    }
    document.getElementById("Stack_X").innerHTML = stack_x;

    if  (stack_x === "ERROR!") {        
      stack_x = "Enter Done";
    } else {
      stack_x = "";
    }

    document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;           
    document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-mr").on("click", function() {
    if (stack_x === "" && document.getElementById("Stack_X").innerHTML !== "") {
      document.getElementById("Stack_T").innerHTML = document.getElementById("Stack_Z").innerHTML;
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_Y").innerHTML;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_X").innerHTML;     
    }

    //$( "#dlgRecall" ).prev(".ui-dialog-titlebar").css("display", "none");
    //$( "#dlgRecall" ).dialog( "open" );
 
    stack_x = mem[0].toString()
    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-ms").on("click", function() {
    mem[0] = Number(document.getElementById("Stack_X").innerHTML);
    stack_x = "";
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-mp").on("click", function() {
    if (!shifted) {
      mem[0] += Number(document.getElementById("Stack_X").innerHTML);
    }else {
      mem[0] -= Number(document.getElementById("Stack_X").innerHTML);
    }
    shifted = false;
    updateStatusShifted();
  });

  $("#Key-hyp").on("click", function() {
    hyp = !hyp;
    updateStatusHyp();
  });

  $("#Key-sin").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      switch (drg) {
        case "Deg":
          x = x * (2 * PI) / 360;
          break;
        case "Grad":
          x = x * (2 * PI) / 400;
      }

      if (!hyp) {
        stack_x = (Math.round(Math.sin(x)*100000)/100000).toString();
      } else {
        stack_x = (Math.round(Math.sinh(x)*100000)/100000).toString();
      }
    } else {
      if (!hyp) {
        x = Math.asin(x);
      } else {
        x = Math.asinh(x);
      }      

      switch (drg) {
        case "Deg":
          x = Math.round(x * 360 / (2 * PI) * 100000)/100000;
          break;
        case "Grad":
          x = Math.round(x * 400 / (2 * PI) * 100000)/100000;
      }

      stack_x = x.toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";
    shifted = false;
    hyp = false;
    updateStatusShifted();
    updateStatusHyp();
  });

  $("#Key-cos").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      switch (drg) {
        case "Deg":
          x = x * (2 * PI) / 360;
          break;
        case "Grad":
          x = x * (2 * PI) / 400;
      }

      if (!hyp) {
        stack_x = (Math.round(Math.cos(x)*100000)/100000).toString();
      } else {
        stack_x = (Math.round(Math.cosh(x)*100000)/100000).toString();
      }
    } else {
      if (!hyp) {
        x = Math.acos(x);
      } else {
        x = Math.acosh(x);
      }      

      switch (drg) {
        case "Deg":
          x = Math.round(x * 360 / (2 * PI) * 100000)/100000;
          break;
        case "Grad":
          x = Math.round(x * 400 / (2 * PI) * 100000)/100000;
      }

      stack_x = x.toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";
    shifted = false;
    hyp = false;
    updateStatusShifted();
    updateStatusHyp();
  });

  $("#Key-tan").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      switch (drg) {
        case "Deg":
          x = x * (2 * PI) / 360;
          break;
        case "Grad":
          x = x * (2 * PI) / 400;
      }

      if (!hyp) {
        stack_x = (Math.round(Math.tan(x)*100000)/100000).toString();
      } else {
        stack_x = (Math.round(Math.tanh(x)*100000)/100000).toString();
      }
    } else {
      if (!hyp) {
        x = Math.atan(x);
      } else {
        x = Math.atanh(x);
      }      

      switch (drg) {
        case "Deg":
          x = Math.round(x * 360 / (2 * PI) * 100000)/100000;
          break;
        case "Grad":
          x = Math.round(x * 400 / (2 * PI) * 100000)/100000;
      }

      stack_x = x.toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";
    shifted = false;
    hyp = false;
    updateStatusShifted();
    updateStatusHyp();
  });

  $("#Key-ln").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      stack_x = Math.log(x).toString();
    } else {
      stack_x = Math.exp(x).toString();
    }
    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-log").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      stack_x = Math.log10(x).toString();
    } else {
      stack_x = Math.pow(10, x).toString();
    }
    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-yx").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    if (!shifted) {
      stack_x = Math.pow(y, x).toString();
    } else {
      stack_x = Math.pow(y, 1/x).toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-root").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      stack_x = Math.pow(x, 1/2).toString();
    } else {
      stack_x = Math.pow(x, 1/3).toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-x2").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);

    if (!shifted) {
      stack_x = Math.pow(x, 2).toString();
    } else {
      stack_x = Math.pow(x, 3).toString();
    }

    document.getElementById("Stack_X").innerHTML = stack_x;
    stack_x = "";

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-pct").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    if (!shifted) {
      stack_x = (y * x / 100).toString();
      document.getElementById("Stack_X").innerHTML = stack_x;
      stack_x = "";
    } else {
      if (x != 0) {
        stack_x = (1/x).toString();
        document.getElementById("Stack_X").innerHTML = stack_x;
        stack_x = "";
      } else {
        stack_x = "ERROR!";
        document.getElementById("Stack_X").innerHTML = stack_x;
        stack_x = "Enter Done";
      }
    }

    shifted = false;
    updateStatusShifted();
  });

  $("#Key-rolldown").on("click", function() {
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
  });

  $("#Key-fact").on("click", function() {
    var x = Number(document.getElementById("Stack_X").innerHTML);
    var y = Number(document.getElementById("Stack_Y").innerHTML);

    if (!shifted) {
      stack_x = factorial(x);
      document.getElementById("Stack_X").innerHTML = stack_x;
    } else {
      if (x != 0) {
        stack_x = (y - Math.floor(y/x)*x).toString();
      } else {
          stack_x = "ERROR!";
      }
      document.getElementById("Stack_X").innerHTML = stack_x;
      document.getElementById("Stack_Y").innerHTML = document.getElementById("Stack_Z").innerHTML;           
      document.getElementById("Stack_Z").innerHTML = document.getElementById("Stack_T").innerHTML;      
    }
    if (stack_x === "ERROR!") {
      stack_x = "Enter Done";
    } else {
      stack_x = "";
    }

    shifted = false;
    updateStatusShifted();
  });
});

