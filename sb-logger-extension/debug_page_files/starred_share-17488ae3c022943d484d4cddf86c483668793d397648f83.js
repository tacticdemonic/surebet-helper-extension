import r from"jquery";import{copyTextToClipboard as a}from"utils";r(function(){r(".starred-share-link-copy-button").click(()=>{let t=r("#starred-share-link-modal"),o=t.find("input#starred_share");a(o.val(),{target:t})})});

