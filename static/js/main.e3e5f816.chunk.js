(this["webpackJsonpvera-frontend"]=this["webpackJsonpvera-frontend"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},481:function(e,t,a){},482:function(e,t,a){},483:function(e,t,a){},484:function(e,t,a){},485:function(e,t,a){},486:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(14),r=a.n(i),n=(a(162),a(163),a(164),a(153)),o=(a(165),a(0));var l=function(){return Object(o.jsx)(n.a,{variant:"outline-dark",children:"Primary"})},j=a(494),d=a(489),b=a(493),u=a(23),h=(a(107),a.p+"static/media/logo.8c904a8c.svg"),m=a(22),x=a(10),O=(a(108),a(74)),f=Object(O.b)({name:"view",initialState:{user:"Fan",collapse:"closed",waitlist:!1},reducers:{toggleArtist:function(e){e.user="Artist"},toggleFan:function(e){e.user="Fan"},toggleCollapseOpen:function(e){e.collapse="open"},toggleCollapseClose:function(e){e.collapse="close"},toggleWaitlistShow:function(e){e.waitlist=!0},toggleWaitlistHide:function(e){e.waitlist=!1}}}),g=f.actions,p=(g.toggleArtist,g.toggleFan,g.toggleCollapseOpen),v=g.toggleCollapseClose,N=(g.toggleWaitlistShow,g.toggleWaitlistHide,function(e){return e.view.collapse}),y=f.reducer;var w=function(){var e=Object(m.b)();return Object(o.jsxs)("div",{className:"toggle-button-group flex-md-col",children:[Object(o.jsx)(x.b,{to:"/",children:Object(o.jsx)(n.a,{variant:"outline-secondary",className:"toggle-button left selected",onClick:function(){return e(v())},children:"For Fans"})}),Object(o.jsx)(x.b,{to:"/artist",children:Object(o.jsx)(n.a,{variant:"outline-secondary",className:"toggle-button right",onClick:function(){return e(v())},children:"For Artists"})})]})};var k=function(e){var t=Object(m.b)(),a=Object(m.c)(N),s=Object(o.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-toggle-open",onClick:function(){return t(p())}});"open"===a&&(s=Object(o.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-toggle-close",onClick:function(){return t(v())},children:Object(o.jsx)("button",{type:"button",className:"close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}));var c=e.fixed?Object(o.jsx)(u.a,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-dark",className:"nav-join-waitlist-button",children:"JOIN WAITLIST"})}):Object(o.jsx)(w,{});return Object(o.jsxs)(j.a,{expand:"lg",className:"navbar flex-row-reverse flex-lg-row",fixed:e.fixed?"top":"none",children:[Object(o.jsx)(u.a,{to:"#header",children:Object(o.jsx)(j.a.Brand,{children:Object(o.jsx)(d.a,{src:h,className:"navbar-logo"})})}),s,Object(o.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(o.jsxs)(b.a,{className:"mr-auto nav",children:[Object(o.jsx)(u.a,{to:"#getting-started",className:"nav-link",children:"Getting Started"}),Object(o.jsx)(u.a,{to:"#how-it-works",className:"nav-link",children:"How It Works"}),Object(o.jsx)(u.a,{to:"#features",className:"nav-link",children:"Features"}),Object(o.jsx)(u.a,{to:"#careers",className:"nav-link",children:"Careers"})]}),Object(o.jsx)(b.a,{className:"ml-auto nav",children:c})]})]})};var T=function(){var e=Object(m.b)();return Object(o.jsxs)("div",{className:"toggle-button-group flex-md-col",children:[Object(o.jsx)(x.b,{to:"/",children:Object(o.jsx)(n.a,{variant:"outline",className:"toggle-button left",onClick:function(){return e(v())},children:"For Fans"})}),Object(o.jsx)(x.b,{to:"/artist",children:Object(o.jsx)(n.a,{variant:"outline",className:"toggle-button right selected",onClick:function(){return e(v())},children:"For Artists"})})]})};var I=function(e){var t=Object(m.b)(),a=Object(m.c)(N),s=Object(o.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-toggle-open",onClick:function(){return t(p())}});"open"===a&&(s=Object(o.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-toggle-close",onClick:function(){return t(v())},children:Object(o.jsx)("button",{type:"button",className:"close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}));var c=e.fixed?Object(o.jsx)(u.a,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-dark",className:"nav-join-waitlist-button",children:"JOIN WAITLIST"})}):Object(o.jsx)(T,{});return Object(o.jsxs)(j.a,{expand:"lg",className:"navbar flex-row-reverse flex-lg-row",fixed:e.fixed?"top":"none",children:[Object(o.jsx)(u.a,{to:"#header",children:Object(o.jsx)(j.a.Brand,{children:Object(o.jsx)(d.a,{src:h,className:"navbar-logo"})})}),s,Object(o.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(o.jsxs)(b.a,{className:"mr-auto nav",children:[Object(o.jsx)(u.a,{to:"#features",className:"nav-link",children:"Features"}),Object(o.jsx)(u.a,{to:"#footer",className:"nav-link",children:"Contact Us"})]}),Object(o.jsx)(b.a,{className:"ml-auto nav",children:c})]})]})},L=a(495),V=a(490),C=a(491),S=(a(178),a.p+"static/media/uparrow.31cf0932.svg");var A=function(e){return Object(o.jsxs)(L.a,{className:"songcard",children:[Object(o.jsx)(L.a.Img,{variant:"top",src:S}),Object(o.jsxs)(L.a.Body,{children:[Object(o.jsxs)(V.a,{children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(L.a.Title,{className:"songcard-title",children:e.song.title})}),Object(o.jsxs)(C.a,{className:"d-flex justify-content-start",children:[Object(o.jsx)(L.a.Text,{className:"songcard-currency",children:"$"}),Object(o.jsx)(L.a.Text,{className:"songcard-title",children:e.song.price}),Object(o.jsx)(d.a,{className:"songcard-arrow",src:S})]})]}),Object(o.jsxs)(V.a,{children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(L.a.Text,{className:"songcard-artist",children:e.song.artist})}),Object(o.jsx)(C.a,{children:Object(o.jsxs)(L.a.Text,{className:"songcard-listens",children:[e.song.listens," Listens"]})})]})]}),Object(o.jsx)(n.a,{className:"songcard-button",children:"Trade"})]})},D=a(47),R=a(496),W=a(72),F=a.p+"static/media/downarrow.ff9ac1d7.svg";a(179);function B(e){var t=e.content,a=e.eventKey,c=e.callback,i=Object(s.useContext)(D.a),r=Object(W.b)(a,(function(){return c&&c(a)})),n=i===a;return Object(o.jsxs)("button",{className:"info-dropdown-header",type:"button",onClick:r,children:[t,Object(o.jsx)(d.a,{className:"info-dropdown-header-icon",src:n?S:F})]})}var E=function(e){return Object(o.jsx)(R.a,{className:"info-dropdown",defaultActiveKey:"1",children:Object(o.jsxs)(L.a,{className:"info-dropdown-content",children:[Object(o.jsx)(B,{content:e.content.header,eventKey:"0"}),Object(o.jsx)(R.a.Collapse,{eventKey:"0",children:Object(o.jsx)(L.a.Body,{className:"info-dropdown-body",children:e.content.body})})]})})};a(180);var Y=function(e){var t=Object(o.jsxs)("div",{children:[Object(o.jsx)(d.a,{src:e.content.filename}),e.content.caption&&Object(o.jsx)("div",{className:"image-caption",children:e.content.caption})]});return e.content.border?Object(o.jsx)(L.a,{className:"image-container",children:t}):Object(o.jsx)("div",{className:"image-container",children:t})},P=a(48),z=a.p+"static/media/uparrow-white.e7a9a8cd.svg",H=a.p+"static/media/downarrow-white.913a93cf.svg";a(181);var J=function(e){var t=Object(s.useState)(!1),a=Object(P.a)(t,2),c=a[0],i=a[1];return Object(o.jsxs)("div",{className:"expandable-text",children:[Object(o.jsx)("span",{children:e.content.mainContent}),c&&Object(o.jsxs)("span",{children:["\xa0",e.content.extraContent]}),Object(o.jsxs)("button",{className:"expandable-text-button",onClick:function(){return i(!c)},children:[c?Object(o.jsx)("i",{className:"expandable-text-button-label",children:"\xa0Read Less"}):Object(o.jsx)("i",{className:"expandable-text-button-label",children:"\xa0Read More"}),Object(o.jsx)(d.a,{className:"expandable-text-arrow",src:c?z:H})]})]})},M=(a(182),{title:"Test Title",price:"9.00",artist:"Test Artist",listens:"100"}),G={header:"What\u2019s a DVR (digital vinyl record)?",body:"Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Non-Fungible Tokens do this for digital creations like art, games, and in our case, music."},_={filename:h,caption:"LOGO - NO BORDER"},U={filename:h,caption:"LOGO - WITH BORDER",border:!0},K={filename:h,border:!0},q={filename:h},X={body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a suscipit mi, nec vestibulum nisi. Mauris vel imperdiet ex, quis ultricies sem. Duis rutrum lorem mauris, eu cursus orci cursus non. Curabitur accumsan non nisl nec scelerisque. Integer molestie velit.  Vivamus elementum felis et orci vulputate, et dictum nisi dignissim. Phasellus suscipit nec risus id tempor. Maecenas luctus ut libero et luctus. Proin lobortis est et ante dapibus interdum. Vivamus porta imperdiet egestas. Nulla ultricies commodo urna, et hendrerit lorem lacinia eu. Suspendisse feugiat at nulla vitae dapibus.",collapsedHeight:120};var Q=function(){return Object(o.jsxs)("div",{className:"elements-container",children:[Object(o.jsx)(k,{}),Object(o.jsx)("br",{}),Object(o.jsx)(I,{}),Object(o.jsx)("br",{}),Object(o.jsx)(l,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"images-container",children:[Object(o.jsx)(Y,{content:q}),Object(o.jsx)(Y,{content:K}),Object(o.jsx)(Y,{content:_}),Object(o.jsx)(Y,{content:U})]}),Object(o.jsx)("br",{}),Object(o.jsx)(E,{content:G}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"expandable-text-container",children:Object(o.jsx)(J,{content:X})}),Object(o.jsx)("br",{}),Object(o.jsx)(A,{song:M}),Object(o.jsx)("br",{})]})},$=(a(109),a(183),a(492)),Z=a.p+"static/media/laptop.53af3569.png";var ee=function(){return Object(o.jsx)($.a,{fluid:!0,className:"artist-header-container",id:"header",children:Object(o.jsxs)(V.a,{className:"flex-column-reverse flex-md-row justify-content-center",xs:1,md:2,children:[Object(o.jsxs)(C.a,{className:"artist-header-text artist-desktop-col",children:[Object(o.jsx)("h1",{className:"artist-header-text-title",children:"The Vinyl Record"}),Object(o.jsx)("p",{className:"artist-header-text-subtitle",children:"Reimagined for the Digital Age"}),Object(o.jsx)("br",{}),Object(o.jsx)("i",{className:"artist-header-text-body",children:"A decentralized record label for a more sustainable future"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"artist-join-waitlist-button",children:"JOIN ARTIST WAITLIST"})})]}),Object(o.jsx)(C.a,{className:"artist-desktop-col",children:Object(o.jsx)(d.a,{fluid:!0,src:Z})}),Object(o.jsxs)(C.a,{className:"artist-mobile-col",children:[Object(o.jsx)("h1",{className:"artist-header-text-title",children:"The Vinyl Record"}),Object(o.jsx)("h1",{className:"artist-header-text-subtitle",children:"Reimagined for the Digital Age"}),Object(o.jsx)("br",{}),Object(o.jsx)(d.a,{fluid:!0,src:Z,className:"artist-header-image-mobile"}),Object(o.jsx)("i",{className:"artist-header-text-body",children:"Support underground artists and grow your portfolio as they grow their fan base."}),Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"artist-join-waitlist-button",children:"JOIN WAITLIST"})})]})]})})},te=a(8),ae=(a(184),a.p+"static/media/logo-white.a6a14f1d.svg"),se=a.p+"static/media/footer-background.ee8b76ed.png",ce=a.p+"static/media/footer-background-mobile.586d3486.png";a(185);var ie=function(){var e,t,a=Object(te.f)();return"/"===a.pathname?(e=Object(o.jsx)(w,{}),t=Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"footer-button",children:"JOIN WAITLIST"})})):"/artist"===a.pathname&&(e=Object(o.jsx)(T,{}),t=Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BYLLLPlb"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"footer-button",children:"JOIN ARTIST WAITLIST"})})),Object(o.jsx)($.a,{fluid:!0,className:"footer-container",id:"footer",children:Object(o.jsxs)($.a,{className:"footer-inner-container",children:[Object(o.jsxs)($.a,{className:"footer-text-wrapper",style:{backgroundImage:"url(".concat(se,")")},children:[Object(o.jsx)("h1",{className:"footer-title",children:"Want your gift to also be an investment in your favorite artists?"}),Object(o.jsxs)(V.a,{children:[Object(o.jsx)(C.a,{md:7,xs:12,children:Object(o.jsx)("p",{className:"footer-subtitle",children:"Sign up to get notified when VERA launches!"})}),Object(o.jsx)(C.a,{className:"footer-col-right",children:t})]})]}),Object(o.jsxs)($.a,{className:"footer-text-wrapper-mobile",style:{backgroundImage:"url(".concat(ce,")")},children:[Object(o.jsx)("h1",{className:"footer-title",children:"Want your gift to also be an investment in your favorite artists?"}),Object(o.jsxs)(V.a,{children:[Object(o.jsx)(C.a,{md:7,xs:12,children:Object(o.jsx)("p",{className:"footer-subtitle",children:"Sign up to get notified when VERA launches!"})}),Object(o.jsx)(C.a,{className:"footer-col-right",children:t})]})]}),Object(o.jsxs)(V.a,{xs:1,md:4,className:"footer-row",children:[Object(o.jsx)(C.a,{md:2,children:Object(o.jsx)(d.a,{src:ae,className:"footer-logo"})}),Object(o.jsx)(C.a,{className:"footer-col-left d-flex justify-content-center justify-content-md-start fan-artist-toggle",md:6,children:e}),Object(o.jsx)(C.a,{md:4,children:Object(o.jsxs)(V.a,{children:[Object(o.jsx)(C.a,{className:"footer-col-right",children:Object(o.jsx)("a",{href:"mailto:anishtech1@gmail.com?subject=Contact Vera",className:"footer-link",children:"Contact"})}),Object(o.jsx)(C.a,{className:"footer-col-right",children:Object(o.jsx)("a",{href:"mailto:anishtech1@gmail.com?subject=Opportunities at Vera",className:"footer-link",children:"Careers"})})]})})]}),Object(o.jsx)(V.a,{children:Object(o.jsx)(C.a,{className:"footer-col-left",children:Object(o.jsx)("p",{className:"footer-copyright",children:"Vera Inc. \xa9 2021. All Rights Reserved."})})})]})})},re=a.p+"static/media/recommendations-icon.85a98d21.svg",ne=a.p+"static/media/creative-freedom-icon.1b15a22f.svg",oe=a.p+"static/media/simple-creation-icon.27537a1f.svg",le=a.p+"static/media/flexible-exchange-icon.b838909d.svg",je=a.p+"static/media/security-icon.b967ea56.svg",de=a.p+"static/media/environment-icon.cc9c43af.svg";a(481);var be=function(){return Object(o.jsxs)($.a,{fluid:!0,className:"artist-features-container align-content-start",id:"features",children:[Object(o.jsx)("h1",{className:"artist-features-header",children:"Features"}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:re,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Crowd Sourced Revenue"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"Vera allows you to unlock a new stream of crowd-funded revenue by tapping into your fanbase for trusted investment. By distributing assets such as music and special content to the public, you can provide an unparalleled level of interaction with your fans while bringing in a new source of income to keep the music flowing."})]})]}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:ne,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Creative Freedom"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"Our goal at Vera is to preserve your creative freedom while creating new opportunities using our crowd funding model. You retain all ownership and copyright over your original work, while your fans gain ownership of a limited edition DVR of your music. We want you to keep making music that we all love, and we\u2019re here to support you along the way."})]})]}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:oe,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Simple Creation"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"Once you have a song on a streaming service such as Spotify, creating a Vera DVR is as simple as clicking a button. You\u2019ll simply connect your account and enter in information about the piece that will add to the creative value of the DVR! Vera will automatically set up an initial DVR auction for your followers and fans on the site."})]})]}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:le,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Monetization"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"You have the flexibility to set monetization rates on sales of your digital vinyl records! You make both a large percentage of initial record auction sales, plus a small commission on all future transactions of your records on the Vera public market."})]})]}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:je,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Security"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"Vera\u2019s flexible exchange is a secure and regulated marketplace in which your DVRs can be transacted in a safe and efficient manner. Our thorough verification and certification processes for users and content on the platform allow us to ensure and maintain authenticity in our markets."})]})]}),Object(o.jsxs)(V.a,{className:"artist-feature-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)(d.a,{src:de,className:"artist-feature-icon"})}),Object(o.jsxs)(C.a,{className:"artist-feature-description",children:[Object(o.jsx)("h2",{className:"artist-feature-title",children:"Low Environmental Impact"}),Object(o.jsx)("p",{className:"artist-feature-body",children:"Traditional NFTs and other new, online art market systems utilize high-energy processes that use extensive amounts of electricity. Vera is committed to a more environmentally friendly approach to decentralized market creation and helping reduce the carbon footprint of the internet."})]})]})]})},ue=a(75);var he=function(){var e=Object(ue.a)({threshold:0}),t=Object(P.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{className:"landing-page artist-view",ref:a,children:[Object(o.jsx)(I,{fixed:s>=.4}),Object(o.jsx)(ee,{}),Object(o.jsx)(be,{}),Object(o.jsx)(ie,{})]})};a(482);var me=function(){return Object(o.jsx)($.a,{fluid:!0,className:"fan-header-container",id:"header",children:Object(o.jsxs)(V.a,{className:"flex-column-reverse flex-md-row justify-content-center",xs:1,md:2,children:[Object(o.jsxs)(C.a,{className:"fan-header-text fan-desktop-col",children:[Object(o.jsxs)("h1",{className:"fan-header-text-title",children:["Support artists early on.",Object(o.jsx)("br",{}),"Prosper together."]}),Object(o.jsx)("br",{}),Object(o.jsx)("i",{className:"fan-header-text-body",children:"Support underground artists and grow your portfolio as they grow their fan base."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"fan-join-waitlist-button",children:"JOIN WAITLIST"})})]}),Object(o.jsx)(C.a,{className:"fan-desktop-col",children:Object(o.jsx)(d.a,{fluid:!0,src:Z})}),Object(o.jsxs)(C.a,{className:"fan-mobile-col",children:[Object(o.jsxs)("h1",{className:"fan-header-text-title",children:["Support artists early on.",Object(o.jsx)("br",{}),"Prosper together."]}),Object(o.jsx)("br",{}),Object(o.jsx)(d.a,{fluid:!0,src:Z,className:"fan-header-image-mobile"}),Object(o.jsx)("i",{className:"fan-header-text-body",children:"Support underground artists and grow your portfolio as they grow their fan base."}),Object(o.jsx)(x.b,{to:{pathname:"https://1vd6ke3g2u4.typeform.com/to/BDLe1YBE"},target:"_blank",children:Object(o.jsx)(n.a,{variant:"outline-light",className:"fan-join-waitlist-button",children:"JOIN WAITLIST"})})]})]})})},xe=(a(483),a.p+"static/media/laptop-icon.83da05f2.svg"),Oe=a.p+"static/media/invest-icon.f2ba5c5e.svg",fe=a.p+"static/media/trade-icon.b5aac8a9.svg",ge=a.p+"static/media/investment-icon.cb0b2ae2.svg";var pe=function(){return Object(o.jsxs)($.a,{fluid:!0,className:"gettingstarted-container",id:"getting-started",children:[Object(o.jsxs)(V.a,{className:"gettingstarted-desktop",children:[Object(o.jsxs)(C.a,{className:"gettingstarted-col",children:[Object(o.jsx)(d.a,{className:"gettingstarted-image",src:xe}),Object(o.jsx)(d.a,{className:"gettingstarted-image",src:ge})]}),Object(o.jsxs)(C.a,{children:[Object(o.jsx)("p",{className:"gettingstarted-header",children:"1.  Sign Up"}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Sign up for an account &",Object(o.jsx)("br",{}),"customize your feed"]}),Object(o.jsx)("p",{className:"gettingstarted-header",children:"2.  Invest"}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Invest in musicians",Object(o.jsx)("br",{}),"by purchasing digital records"]}),Object(o.jsx)("p",{className:"gettingstarted-header",children:"3.  Grow"}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Grow your investments",Object(o.jsx)("br",{}),"as they grow their fan base"]}),Object(o.jsx)("p",{className:"gettingstarted-header",children:"4.  Trade"}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Trade your virtual records &",Object(o.jsx)("br",{}),"expand your musical portfolio"]})]})]}),Object(o.jsxs)("div",{className:"gettingstarted-mobile",children:[Object(o.jsxs)("div",{className:"gettingstarted-mobile-icon-group",children:[Object(o.jsx)("p",{className:"gettingstarted-header",children:"1.  Sign Up"}),Object(o.jsx)(d.a,{className:"gettingstarted-image",src:xe}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Sign up for an account &",Object(o.jsx)("br",{}),"customize your feed"]})]}),Object(o.jsxs)("div",{className:"gettingstarted-mobile-icon-group",children:[Object(o.jsx)("p",{className:"gettingstarted-header",children:"2.  Invest"}),Object(o.jsx)(d.a,{className:"gettingstarted-image",src:Oe}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Invest in musicians",Object(o.jsx)("br",{}),"by purchasing digital records"]})]}),Object(o.jsxs)("div",{className:"gettingstarted-mobile-icon-group",children:[Object(o.jsx)("p",{className:"gettingstarted-header",children:"3.  Grow"}),Object(o.jsx)(d.a,{className:"gettingstarted-image",src:ge}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Grow your investments",Object(o.jsx)("br",{}),"as they grow their fan base"]})]}),Object(o.jsxs)("div",{className:"gettingstarted-mobile-icon-group",children:[Object(o.jsx)("p",{className:"gettingstarted-header",children:"4.  Trade"}),Object(o.jsx)(d.a,{className:"gettingstarted-image",src:fe}),Object(o.jsxs)("p",{className:"gettingstarted-text",children:["Trade your virtual records &",Object(o.jsx)("br",{}),"expand your musical portfolio"]})]})]})]})},ve=(a(484),a.p+"static/media/coin-data-icon.6f70810e.svg"),Ne={header:Object(o.jsxs)("div",{children:["What are ",Object(o.jsx)("div",{className:"popout-letter",children:"D"}),"igital ",Object(o.jsx)("div",{className:"popout-letter",children:"L"}),"imited Edition ",Object(o.jsx)("div",{className:"popout-letter",children:"V"}),"inyl Records (DLVs)"]}),body:"DLVs are a new way to experience music. Take the painting of the Mona Lisa, for example. It is copied, photographed, and distributed everywhere, but there's only one original physical painting. This gives the original painting and its owner incredible value due to its rarity. Digital vinyl records do this with music, creating limited edition works that can grow in value as artists gain popularity."},ye={header:"How does Vera use DLVs",body:"Vera allows you to grow with your favorite artists by purchasing shares of their digital vinyl records, and enables us to securely give you ownership of a limited edition record showcasing their music. This is possible because these records are unique and certified digital assets stored on the blockchain. While copies of digital items are available for anyone to obtain, Vera\u2019s digital vinyl records track and provide you with proof of ownership over the asset."},we={header:"How can I buy and sell DLVs?",body:"Vera\u2019s marketplace allows you to explore, buy, and sell DLVs with other fans on the platform. When artists launch a brand new DLV, auctions will be hosted giving you the opportunity to be the first to own these exclusive items!"},ke={header:"How does Vera handle security?",body:"Vera\u2019s flexible exchange is a secure and regulated marketplace in which your DVRs can be transacted in a safe and efficient manner. Our thorough verification and certification processes for users and content on the platform allow us to ensure and maintain authenticity in our markets."},Te={header:"What is Vera\u2019s impact on the environment?",body:"Traditional NFTs and other new, online art market systems utilize high-energy processes that use extensive amounts of electricity. Vera is committed to a more environmentally friendly approach to decentralized market creation and helping reduce the carbon footprint of the internet."};var Ie=function(){return Object(o.jsxs)($.a,{fluid:!0,className:"howitworks-container",id:"how-it-works",children:[Object(o.jsxs)(V.a,{className:"flex-column flex-md-row",children:[Object(o.jsx)(C.a,{children:Object(o.jsx)("h1",{className:"howitworks-text-title",children:"How it works"})}),Object(o.jsx)(C.a,{className:"howitworks-text-body",children:Object(o.jsx)("i",{children:"With Vera, artists can distribute their music in the form of digital vinyl records to the public. You can follow the growth of your favorite artists by purchasing copies of these records."})})]}),Object(o.jsx)("br",{}),Object(o.jsxs)(V.a,{className:"flex-column flex-md-row",children:[Object(o.jsx)(C.a,{className:"flex-md-col",children:Object(o.jsx)(d.a,{className:"howitworks-icon",src:ve})}),Object(o.jsxs)(C.a,{children:[Object(o.jsx)(E,{content:Ne}),Object(o.jsx)("br",{}),Object(o.jsx)(E,{content:ye}),Object(o.jsx)("br",{}),Object(o.jsx)(E,{content:we}),Object(o.jsx)("br",{}),Object(o.jsx)(E,{content:ke}),Object(o.jsx)("br",{}),Object(o.jsx)(E,{content:Te})]})]})]})},Le=(a(485),a.p+"static/media/analytics-icon.b6a1f133.svg"),Ve=a.p+"static/media/advanced-search-icon.ae0ed2da.svg";var Ce=function(){return Object(o.jsxs)($.a,{fluid:!0,className:"fan-features-container align-content-start",id:"features",children:[Object(o.jsx)("h1",{className:"fan-features-header",children:"Features"}),Object(o.jsxs)(V.a,{xs:2,md:4,children:[Object(o.jsxs)(C.a,{children:[Object(o.jsx)(d.a,{src:re,className:"fan-features-icon"}),Object(o.jsxs)("p",{className:"fan-features-icon-label",children:["INVESTMENT",Object(o.jsx)("br",{}),"RECOMMENDATIONS"]})]}),Object(o.jsxs)(C.a,{children:[Object(o.jsx)(d.a,{src:Le,className:"fan-features-icon"}),Object(o.jsxs)("p",{className:"fan-features-icon-label",children:["VISUAL",Object(o.jsx)("br",{}),"ANALYTICS"]})]}),Object(o.jsxs)(C.a,{children:[Object(o.jsx)(d.a,{src:Ve,className:"fan-features-icon"}),Object(o.jsxs)("p",{className:"fan-features-icon-label",children:["ADVANCED",Object(o.jsx)("br",{}),"SEARCH"]})]}),Object(o.jsxs)(C.a,{children:[Object(o.jsx)(d.a,{src:le,className:"fan-features-icon"}),Object(o.jsxs)("p",{className:"fan-features-icon-label",children:["FLEXIBLE",Object(o.jsx)("br",{}),"EXCHANGE"]})]})]})]})};a(486);var Se=function(){return Object(o.jsxs)($.a,{fluid:!0,className:"fan-contact-container",id:"careers",children:[Object(o.jsx)("h1",{className:"fan-contact-header",children:"Careers"}),Object(o.jsxs)("p",{className:"fan-contact-text",children:["At Vera, we are driven by our mission to revolutionize the music industry and offer an unparalleled level of interaction between artists and fans. We're currently looking for ambitious individuals with talent in software, design, and finance.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"If our mission and product interests you, we'd love to see you in our inbox!",Object(o.jsx)("br",{}),"Let us know a bit about your background and why you think you'd be a good fit."]}),Object(o.jsx)(n.a,{href:"mailto:anishtech1@gmail.com?subject=Opportunities at Vera",variant:"outline-light",className:"fan-contact-button",children:"CONTACT US"})]})};var Ae=function(){var e=Object(ue.a)({threshold:0}),t=Object(P.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{className:"landing-page fan-view",ref:a,children:[Object(o.jsx)(k,{fixed:s>=.3}),Object(o.jsx)(me,{}),Object(o.jsx)(pe,{}),Object(o.jsx)(Ie,{}),Object(o.jsx)(Ce,{}),Object(o.jsx)(Se,{}),Object(o.jsx)(ie,{})]})},De=a(77),Re=a(17);De.a.initialize("G-9QEL0TW34P");var We=Object(Re.a)();We.listen((function(e){De.a.set({page:e.pathname}),De.a.pageview(e.pathname)}));var Fe=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(x.a,{history:We,children:Object(o.jsxs)(te.c,{children:[Object(o.jsx)(te.a,{exact:!0,path:"/",children:Object(o.jsx)(Ae,{})}),Object(o.jsx)(te.a,{exact:!0,path:"/artist",children:Object(o.jsx)(he,{})}),Object(o.jsx)(te.a,{path:"/elements",children:Object(o.jsx)(Q,{})})]})})})},Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,497)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))},Ee=Object(O.a)({reducer:{view:y},devtools:!1});r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m.a,{store:Ee,children:Object(o.jsx)(Fe,{})})}),document.getElementById("root")),Be()}},[[487,1,2]]]);
//# sourceMappingURL=main.e3e5f816.chunk.js.map