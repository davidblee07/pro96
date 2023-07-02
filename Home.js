import React from 'react';
import SidebarLinks from '../common/SidebarLinks';

export class Home extends React.Component {
    handleClick = ()=>{
        /* .... */
    }
    render() {
        const { CompaniaR } = this.props
        return (
            <div>
                <header>
                    {logo()}
                </header>
               <div className="body">
                <section>
                    <h2>Bem Vindo!</h2>
                    <button onClick={this.handleClick}>Va para o teclado</button>
                </section>
                <aside>
                    {perfil()}
                    <sidebarLinks links={this.state.links}/>
                </aside>
               </div>
                {footer()}
            </div>
        )

        function footer() {
            return <footer>
                <span>
                    {CompaniaR} {newDate().getFullYear()}
                </span>
            </footer>;
        }

        function perfil() {
            return <div clas="Profile-card">
                <img src={this.props.use.avatar} alt="" />
                {this.props.user.nickname}
            </div>;
        }

        function logo() {
            return <div className="logo">
                <img srcc={logoImg} alt="" />
            </div>;
        }
    }
}