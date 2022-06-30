import "../asset/style.css"
import Header from "./header"
import Splascontent from "./splashcontainer"
import Contenthead from "./contentwrapper/contenthead"
import Isicontent1 from "./contentwrapper/isicontent1"
import Isicontent2 from "./contentwrapper/isicontent2"
import Isicontent3 from "./contentwrapper/isicontent3"
import Isicontent4 from "./contentwrapper/isicontent4"
import Ribboncontent from "./contentwrapper/ribboncontent/i1"
import Ribbonhead from "./contentwrapper/ribboncontent/i1/ribbonhead"
import Keterangan from "./contentwrapper/ribboncontent/i1/ribbonhead/ket_ribbon"
import Login from "./contentwrapper/logincode"
import Help from "./contentwrapper/needhelp"
import Footer from "./contentwrapper/footer"

export default function Content()
{
    return (
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A layout example that shows off a responsive product landing page." />
  <title>Landing Page – Layout Examples – Pure</title>
  <link rel="stylesheet" href="/css/pure/pure-min.css" />
  <link rel="stylesheet" href="/css/pure/grids-responsive-min.css" />
  <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
  <link rel="stylesheet" href="/layouts/marketing/styles.css" />
  <div class="header">
      <Header />
</div>
  <div className="splash-container">
    <Splascontent/>
  </div>
  <div className="content-wrapper">
    <div className="content">
      <Contenthead />
      <div className="Isi Content">
        <Isicontent1 />
        <Isicontent2 />
        <Isicontent3 />
        <Isicontent4 />
      </div>
    </div>
    <div className="ribbon l-box-lrg pure-g">
      <Ribboncontent />
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
        <Ribbonhead />
        <Keterangan />
      </div>
    </div>
    <div className="content">
      <h2 className="content-head is-center">LOGIN</h2>
      <div className="pure-g">
        <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
          <Login />
        </div>
        <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
          <Help />
        </div>
      </div>
    </div>
      <Footer />
  </div>
</div>


    )
}