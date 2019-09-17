/**
 * Created by perlo on 9/9/2016.
 */
$(document).ready(function (){

    $( "[type='button']" )
        .on("touchend click",
            function ()
            {
                var self=this;
                setTimeout(
                    function ()
                    {
                        $(self).removeClass("ui-btn-active");
                    },100
                );
                $(this).button("refresh");
            });
    $( "#id12023" )
        .on("touchend click",
            function ()
            {
                var self=this;
                setTimeout(
                    function ()
                    {
                        $(self).removeClass("ui-btn-active");
                    },100
                );
                $(this).button("refresh");
            });

    var Student1=Backbone.Model.extend({
        initialize:function () {
            console.log("new student was created");
           $("#id1201").html("This document displays Backbone.js implementation\n"+
           " on Student Model:change and add attributes");
            //$("#id12021").val("")
        },
        hello:function () {
            console.log("hello world");

        },
        defaults:{
            name:'a ',
            id:1231123,
            average:92
        }
    });
    var attr_array1=[];
    var attr_array_n=0;
    var a1=new Student1({name:"David3",id:1122331,average:93});
    var b1=new Student1({name:"Tal",id:1213141,average:88});
    var a32="<li>name="+a1.get("name")+"</li>";
    a32+="<li>id="+a1.get("id")+"</li>";
    a32+="<li>average="+a1.get("average")+"</li>";
    $("#id1014").html(a32);
    $("#id12051").listview();
    $("#id12051").html(a32);
    $("#id12051").listview("refresh");
    console.log(a1);
    $("#id1203").html("hello student ");
    //$("#id1203").hide();

    // $('#id1012').bind("click",function ()
    // {
    //
    // });

    $('#id12023').bind('click',function()
    {
        if($("#id12021").val()!='')
        {
            var a31=$("#id12021").val();
        }else
        {
            var a31=a1.get("name");
        }

        var a32='';
        if(($("#id12022").val())!='')
        {
            a32=$("#id12022").val();
        }else
        {
            a32=a1.get("id");
        }

         var a35='';
        if(($("#id12026").val())!='')
        {
            a35=$("#id12026").val();
        }else
        {
            a35=a1.get("average");
        }

        a1.set({name:a31});
        a1.set({id:a32});
        a1.set({average:a35});


        var a321="<li>name="+a1.get("name")+"</li>";
        a321+="<li>id="+a1.get("id")+"</li>";
        a321+="<li>average="+a1.get("average")+"</li>";
        var a36='';
        var a37='';
        a36=$("#id12024").val();
        a37=$("#id12025").val();
        if(a36!='')
        {
            var attribute={};
            attribute[a36]=a37;
            a1.set(attribute);
            // a321+="<li>"+a36+"="+a37+"</li>";
            $("#id1203").html("a change have done,go back and see this change ");

            a321+="<li>"+a36+"="+a1.get(a36)+"</li>";
        }
        // $("#id1014").listview();
        $("#id1014").html(a321);
        // $("#id1014").listview().listview("refresh");
       // $("#id1014").listview("refresh");
        $("#id12051").listview();
        $("#id12051").html(a321);
        $("#id12051").listview("refresh");

        //$("#id1204").html("hello31");
       // $("#id1205").html("its done,go back and see the changes");
    });
    var BankAccount=Backbone.Model.extend({
        initialize:function () {
            console.log("new account was created");
            $("#id1301").html(
                "This document displays Backbone.js implementation:"+
              "<br/>"+
                " functions deposit and withdraw within Back Account Model ");
        },
        defaults:{
            balance:0,
           credit:0,
            interest:5,
            id:0
        },
        aprintDetails:function () {
            console.log("balance="+this.get("balance"));
            var a38='';
            a38="<li>id="+this.get("id")+"</li>";
            a38+="<li>balance="+this.get("balance")+"</li>";

            $("#id1017").html(a38);

        },
        adeposit:function (sum)
        {
            var a39=this.get("balance")+sum;
            this.set({balance:a39});
        },
        awithdraw:function (sum)
        {
            var a40=this.get("balance")-sum;
            var a41=this.get("balance")+this.get("credit");
            if (sum<a41)
            {
                this.set({balance:a40});
            }
        }
    });
    var ob=new BankAccount({id:123,balance:230});
    ob.adeposit(40);
    ob.awithdraw(10);
    ob.aprintDetails();
    $('#id13023').bind('click',function()
    {
        var a51=0;
        var a52='0';
        a52+=$("#id13021").val();
        var a521=parseFloat(a52);
        ob.set({credit:a521}) ;

        var a53='0';
        a53+=$("#id13022").val();
        var a531=parseFloat(a53);
        ob.adeposit(a531);

        var a54='0';
        a54+=$("#id13026").val();
        var a541=parseFloat(a54);
        ob.awithdraw(a541);

        ob.aprintDetails();


        $("#id1305").html("its done,go back and see the changes");
    });
    $("#id1015").bind("click",function ()
    {
        $("#id1305").html(" ");
    });
    var BankAccount1=Backbone.Model.extend({
        urlRoot:'serverm.php/accounts',
        initialize:function () {
            console.log("new account1 was created");
            $("#id1401").html(
                "This document displays Backbone.js implementation:"+
                "<br/>"+ "attributes of Model are getting through"+
                " <br/>  ajax based HTTP request to url address "+
                "<br/>"+
                " functions deposit1 and withdraw1 within Back Account1 Model ");
            this.on("change:credit",function ()
            {
                var newCredit=ob1.get("credit");
                $("#id140821").html("new credit was recieved="+newCredit);
                $( "#id14082" ).popup();
                $( "#id14082" ).popup( "open" );

            });
            // this.on("change:id",function ()
            // {
            //   var newId=ob1.get("id");
            //     $("#id140821").html("new id was choosen="+newId);
            //     $( "#id14082" ).popup();
            //     $( "#id14082" ).popup( "open" );
            // });
        },
        defaults:{
            balance:0,
            credit:0,
            interest:5,
            id:0
        },
        aprintDetails1:function () {
            console.log("balance="+this.get("balance"));
            var a381='';
            a381="<li>id="+this.get("id")+"</li>";
            a381+="<li>balance="+this.get("balance")+"</li>";
            a381+="<li>credit="+this.get("credit")+"</li>";
            $("#id1020").html(a381);
            $("#id14071").listview();
            $("#id14071").html(a381);
            $("#id14071").listview("refresh");

        },
        adeposit1:function (sum)
        {
            var a39=this.get("balance")+sum;
            this.set({balance:a39});
            var a392={balance:a39};
            this.save(a392,{
                    type: 'POST'
                }
                ,{success:function ()
            {
                this.aprintDetails1();
            }});
        },
        awithdraw1:function (sum)
        {
            var a40=this.get("balance")-sum;
            var a41=this.get("balance")+this.get("credit");
            if (sum<a41)
            {
                this.set({balance:a40});
                var a402={balance:a40};
                this.save(a402,{success:function ()
                {
                    this.aprintDetails1();
                }});
            }
        }
    });
    var ob1=new BankAccount1({id:123});
    // var ob1=new BankAccount1({id:124});
    ob1.fetch({success:function ()
    {
        ob1.aprintDetails1();
    }});
    $("#id14062").bind("click",function ()
    {
        var a411=$("#id14061").val();
        var a412=parseInt(a411);
        ob1=new BankAccount1({id:a412});
        // var ob1=new BankAccount1({id:124});
        ob1.fetch({success:function ()
        {
            ob1.aprintDetails1();
        }});
    });

    $('#id14023').bind('click',function()
    {
        var a51=0;
        var a52='';
        a52+=$("#id14021").val();
        if(a52!='')
        {
            var a521=parseFloat(a52);
            ob1.set({credit:a521}) ;
        }

        var a53='';
        a53+=$("#id14022").val();
        if (a53!='')
        {
            var a531=parseFloat(a53);
            ob1.adeposit1(a531);
        }

        var a54='';
        a54+=$("#id14026").val();
        if (a54!='')
        {
            var a541=parseFloat(a54);
            ob1.awithdraw1(a541);
        }

        ob1.aprintDetails1();


        $("#id1405").html("its done, see the changes of data");
    });
$(".goin").click(function ()
{
   //$("div:hidden").show("fast");
    $("#id14082").show();
})
});//ready