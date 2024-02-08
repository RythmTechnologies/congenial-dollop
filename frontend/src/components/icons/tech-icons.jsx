import { IoLogoElectron as ElectronJS } from "react-icons/io5";
import { IoLogoNodejs as NodeJS } from "react-icons/io";
import {
  BiLogoJavascript as JavaScript,
  BiLogoTypescript as TypeScript,
  BiLogoPython as Python,
  BiLogoDjango as Django,
  BiLogoPostgresql as PostgreSQL,
} from "react-icons/bi";

import {
  SiGnubash as BashShell,
  SiCsharp as CSharp,
  SiExpress as ExpressJS,
  SiReact as ReactJS,
  SiNextdotjs as NextJS,
  SiExpo as Expo,
  SiDevexpress as DevExpress,
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiTailwindcss as TailwindCSS,
  SiBootstrap as Bootstrap,
  SiJquery as JQuery,
  SiMongodb as MongoDB,
  SiMysql as MYSQL,
  SiMicrosoftsqlserver as MSSQL,
  SiFirebase as Firebase,
  SiRedis as Redis,
  SiCelery as Celery,
  SiSelenium as Selenium,
  SiSqlite as SQLite,
  SiGit as Git,
  SiGithub as GitHub,
  SiAmazonaws as AWS,
  SiDocker as Docker,
  SiNginx as Nginx,
  SiPm2 as PM2,
  SiLinkedin as Linkedin,
} from "react-icons/si";

const DjangoRestFramework = ({ className, ...props }) => (
  <img
    className={className}
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAACjAAB+WVr2AAAAAXRSTlMAQObYZgAAADBJREFUeAFjgAD2B0BC/geQsP8DI+r/YSMQSmA6+D8ACeYDDHAA5oIlyDQU4iAwAAC4HiJpG4n1oQAAAABJRU5ErkJggg=="
    alt="Django Rest Framework"
    dataCsiid="12"
    dataAtf="1"
  />
);

const icons = {
  ElectronJS,
  NodeJS,
  JavaScript,
  TypeScript,
  Python,
  Django,
  PostgreSQL,
  BashShell,
  CSharp,
  ExpressJS,
  ReactJS,
  NextJS,
  Expo,
  DevExpress,
  HTML,
  CSS,
  TailwindCSS,
  Bootstrap,
  JQuery,
  MongoDB,
  MYSQL,
  MSSQL,
  Firebase,
  Redis,
  Celery,
  Selenium,
  SQLite,
  Git,
  GitHub,
  AWS,
  Docker,
  Nginx,
  PM2,
  Linkedin,
  DjangoRestFramework,
};

export function TechLogoComponent({ logoName, ...props }) {
  const Logo = icons[logoName];

  return Logo ? <Logo {...props} /> : null;
}
