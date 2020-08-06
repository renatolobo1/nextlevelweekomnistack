import React from 'react';
import { Link } from 'react-router-dom';

import logoImag from '../../assets/images/logo.svg';
import BAckIcon from '../../assets/images/icons/back.svg';

import './style.css';

interface PageHeaderProps{
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={BAckIcon} alt=""/>
          </Link>
          <img src={logoImag} alt=""/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>

        {props.children}
        </div>

      </header>
  );
}

export default PageHeader;