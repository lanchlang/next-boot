import React from 'react'
import Button from 'antd/lib/button';
import css from  "../styles/main.scss"
class Header extends React.Component{
    render(){
        return (<div>
            <header className={css.header}>
              <div className={css.header_container}>
                <nav className={css.logo}>
                     <a href="/" className={css.logo_img}>
                       <img src="/static/images/logo.jpg"/>
                     </a>  
                     <span className={css.logo_divider}/>
                     <a className={css.logo_word}>
                        <img src="/static/images/logo-word.jpg"/>
                     </a> 
                </nav>
                <form className={css.search_form}> 
                   <div className={css.search_text_placeholder}>
                       <span className={css.search_icon_small}/>
                       <span>搜索</span>
                   </div>
                   <div className={css.search_text}>
                       <span className={css.search_icon_small}>搜索</span> 
                       <input className={css.search_text} placeholder="搜索"/>
                       <span className={css.close_icon}/>
                   </div>
                </form>
                <nav className={css.nav_user}>
                   <a href="" className={css.register_btn}>
                      注册
                   </a>
                   <a href="" className={css.login_btn}>
                      登录
                   </a>
                </nav>
               </div>  
            </header>
        </div>)
    }
}

export default Header