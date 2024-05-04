/*

新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^https:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header bibi.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '_uuid=BC7D5407-804C-F761-73E2-77E52678BC1866365infoc; buvid3=96358882-022A-446F-B05B-0402836345F049121infoc; buvid4=EEB2E6B0-1DA3-4743-6261-69D9F9BA8FF466771-124042516-hAOBtv7yN8QhYH7bI7lIcQ%3D%3D; b_nut=100; buvid_fp=c43b35ba9a2bc53a77ae38b205f01dd7; Buvid=YD4DCEDD0A00B9134C6AB6373FDB351A8C21; DedeUserID=3546559201413941; DedeUserID__ckMd5=86d2937300731cc4; SESSDATA=37252b0c%2C1730113700%2C3eec4851CjCltBcEkcnDU-rH_V0G7cDJNkch46JvOi6p-hB08rvkngCK5Hzek0-grZ9u-xSLQFMSVjhoQlhXRjRuUzBUZlFtVFFhdnRnMnFjaGRNNHNzNnR2WTdmdzRRcWVxbExocHU5ajZCYXZJV1FlaDc1TE91M1lHWm5MbjlpMUJ1bExic0N3ZDFqVXNBIIEC; bili_jct=887eb6875a93b7ec17ff90a592edb191; sid=8c4snf66';

modifiedHeaders['Authorization'] = 'identify_v1 836813d59aa7fca19aec1226c16a5551CjCltBcEkcnDU-rH_V0G7cDJNkch46JvOi6p-hB08rvkngCK5Hzek0-grZ9u-xSLQFMSVjhoQlhXRjRuUzBUZlFtVFFhdnRnMnFjaGRNNHNzNnR2WTdmdzRRcWVxbExocHU5ajZCYXZJV1FlaDc1TE91M1lHWm5MbjlpMUJ1bExic0N3ZDFqVXNBIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/77600100 CFNetwork/1.0 Darwin/23.1.0 os/ios model/iPhone 15 Pro Max mobi_app/iphone build/77600100 osVer/17.1.1 network/2 channel/AppStore';

$done({headers : modifiedHeaders});
