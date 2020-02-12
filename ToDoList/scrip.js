$(".btn.btn-primary").click(function() {
  $(".title-work-decor .name").each(function() {
    if ($(this).text() == $("#name").val()) {
      alert("Такая задача уже есть");

      $("#name").val("");

      $("#about").val("");

      return false;
    }
  });
  if ($("#name").val() != "" && $("#about").val() != "") {
    var div = $(
      '<div class="title-work"><div class="title-work-decor row"><div class="name col-6"></div><div class="col-3" style="padding: 0;"></div> <div class="close col-1"><img src="images/krest.png"></div><div class="col-1" style="padding: 0;"></div><div class="down col-1"><img src="images/strelka-up.png" class="turn"></div></div><div class="text-decor"></div></div>'
    );

    var y = $("#name").val();

    var x = $("#about").val();

    div.find(".title-work-decor .name").html(y);

    div.find(".text-decor").html(x);

    div.appendTo("#left-block .added-work");

    $(".test").hide();
  } else {
    return false;
  }
});

$("body").on("click", ".close img", function() {
  $(this)
    .parents(".title-work")
    .remove();
  if (!$("*").is(".title-work")) {
    $(".test").show();
  }
});

$("body").on("click", ".down img", function() {
  let toHiddenBlock = $(this)
    .parents(".title-work")
    .find(".text-decor");
  toHiddenBlock.toggleClass("hidden");
  if ($(".text-decor").is(".hidden")) {
    $(".turn").toggleClass("up");
  } else {
    $(".turn").removeClass("up");
  }
});
