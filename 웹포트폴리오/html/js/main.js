$(document).ready(function(){
    // 프로필 보기
    var $clickprofile = 0;
    var $clickprofile_event = 0;
	$('#goprofile').click(function(){
        $clickprofile++;
        $clickprofile_event=$clickprofile%2;

        if($clickprofile_event==1){
            $('input:checkbox[id="menu_btn"]').prop("checked", true);
        }
        else{
            $('input:checkbox[id="menu_btn"]').prop("checked", false);
        }
    });
    // 프로필 보기
});