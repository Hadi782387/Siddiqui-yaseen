<<<<<<< HEAD
giimport { useState, useEffect, useCallback } from "react";
=======
import { useState, useEffect, useCallback } from "react";
>>>>>>> de35cdf046ec58bd0e7db8c69b1e75d9401c2204
import { me, experience, projects, skills } from "./data";

const me_av = { tone: "mint", initial: "Y" };
const Avatar = ({ m, size = "" }) => (
  <div className={`avatar ${m.tone} ${size}`} aria-hidden="true">
    <div className="body"><i /><i /></div>
    <div className="head">
      <div className="hair" />
      <div className="face"><span className="eye l" /><span className="eye r" /><span className="cheek l" /><span className="cheek r" /><span className="mouth" /></div>
    </div>
    <div className="laptop"><em>{m.initial}</em></div>
    <div className="hand l" /><div className="hand r" />
  </div>
);

function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    const k = (e) => { if (["Enter", " ", "Escape"].includes(e.key)) { e.preventDefault(); onDone(); } };
    window.addEventListener("keydown", k);
    return () => { clearTimeout(t); window.removeEventListener("keydown", k); };
  }, [onDone]);
  return (
    <div className="splash" role="dialog" aria-label="Welcome">
      <div className="splash-k">Y</div>
      <div className="splash-word" aria-hidden="true">{"YASEEN".split("").map((c, i) => <span key={i} style={{ animationDelay: `${0.5 + i * 0.1}s` }}>{c}</span>)}</div>
      <p>Full-stack projects. Shaped in code.</p>
      <button className="skip" onClick={onDone} autoFocus>Skip (Enter)</button>
    </div>
  );
}

const links = [["top", "Home"], ["about", "About"], ["experience", "Experience"], ["work", "Projects"], ["skills", "Skills"], ["resume", "Resume"], ["contact", "Contact"]];

export default function App() {
  const [splash, setSplash] = useState(() => { try { return !sessionStorage.getItem("yaseen-splash"); } catch { return true; } });
  const done = useCallback(() => { try { sessionStorage.setItem("yaseen-splash", "1"); } catch {} setSplash(false); }, []);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!form.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) x.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) x.message = "Write at least 10 characters.";
    setErrs(x);
    if (Object.keys(x).length) return;
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${me.email}?subject=${encodeURIComponent("Portfolio message from " + form.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = (k, label, area) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {area ? <textarea id={k} rows="5" value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
            : <input id={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />}
      {errs[k] && <p className="err" role="alert">{errs[k]}</p>}
    </div>
  );
  const chip = (label, url, mail) => url
    ? <a key={label} className="ghost" href={url} target={mail ? undefined : "_blank"} rel="noreferrer">{label}</a>
    : <span key={label} className="ghost">{label} · Coming soon</span>;

  return (
    <>
<<<<<<< HEAD
      <div className="orbs" aria-hidden="true"><i className="orb o1" /><i className="orb o2" /><i className="orb o3" /><i className="orb o4" /></div>
=======
>>>>>>> de35cdf046ec58bd0e7db8c69b1e75d9401c2204
      {splash && <Splash onDone={done} />}
      <header className="navwrap">
        <div className="nav">
          <button className="logo" onClick={() => go("top")} aria-label="Home">Y</button>
          <button className="pill" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? "Close" : "Menu"}</button>
        </div>
        {menu && <nav className="menu" aria-label="Main">{links.map(([id, l]) => <button key={id} onClick={() => go(id)}>{l}</button>)}</nav>}
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Mumbai · {me.role}</p>
          <h1>YASEEN</h1>
          <h2>Full-stack projects. Shaped in code.</h2>
          <p className="lead">{me.intro}</p>
          <div className="cta-row">
            <button className="cta" onClick={() => go("work")}>See my work <span>↓</span></button>
            <a className="cta soft" href={me.resume} download>Download resume</a>
          </div>
          <div className="blob peach" /><div className="blob mint" />
          <figure className="solo"><Avatar m={me_av} size="xl" /><figcaption>Yaseen</figcaption></figure>
        </section>

        <section id="about" className="sec">
          <p className="eyebrow">About me</p>
          <h2 className="h">Who I am</h2>
          <div className="card">{me.about.map((t, i) => <p key={i} className="big small-big">{t}</p>)}</div>
          <div className="facts">{me.facts.map(([l, v]) => <div className="fact" key={l}><small>{l}</small><b>{v}</b></div>)}</div>
          <div className="card val">
            <span className="num">@</span><h3>Beyond code</h3>
            <p className="muted">I run <a className="inl" href={`https://instagram.com/${me.instagram}`} target="_blank" rel="noreferrer">@{me.instagram}</a>, an Instagram account sharing Stoic and mindset content.</p>
          </div>
        </section>

        <section id="experience" className="sec">
          <p className="eyebrow">Experience</p>
          <h2 className="h">Where I have worked and studied</h2>
          {experience.map((x) => (
            <div className="exp" key={x.org}>
              <span className="exptag">{x.tag}</span>
              <p className="eyebrow">{x.when}</p>
              <h3>{x.org}</h3>
              <p className="org">{x.title}</p>
              {x.text && <p className="desc">{x.text}</p>}
            </div>
          ))}
        </section>

        <section id="work" className="sec">
          <p className="eyebrow">Selected work</p>
          <h2 className="h">Things I have built</h2>
          <p className="muted">Personal projects across React, Node.js, Express, Unity and Flutter.</p>
          {projects.map((p) => (
            <article className="card proj" key={p.title}>
              <div className={`art ${p.tone}`}><span className={`tile ${p.tone}`}>{p.code}</span><i className="b1" /><i className="b2" /><i className="b3" /></div>
              <div className="pbody">
                <span className="badge">Personal project</span>
                <h3 className="ptitle">{p.title}</h3><p className="muted">{p.sub}</p>
                <p className="desc">{p.text}</p>
                <div className="chips">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                {p.link ? <a className="link" href={p.link} target="_blank" rel="noreferrer">View project →</a> : <span className="ghost">Link coming soon</span>}
              </div>
            </article>
          ))}
        </section>

        <section id="skills" className="sec">
          <p className="eyebrow">Skills</p>
          <h2 className="h">My toolbox</h2>
          <p className="muted">A practical toolkit built through projects, not a wall of logos.</p>
          {skills.map((g) => (
            <div className="card" key={g.group}><h3>{g.group}</h3><div className="chips">{g.items.map((s) => <span className="chip dotted" key={s}>{s}</span>)}</div></div>
          ))}
        </section>

        <section id="resume" className="sec">
          <p className="eyebrow">Resume</p>
          <h2 className="h">Take a closer look</h2>
          <div className="card rubric">
            <h3>Yaseen Siddiqui, {me.role}</h3>
            <p className="muted">One page: projects, skills, work experience and education.</p>
            <div className="cta-row left">
              <a className="cta" href={me.resume} download>Download PDF ↓</a>
              <a className="cta soft" href={me.resume} target="_blank" rel="noreferrer">View online</a>
            </div>
          </div>
        </section>

        <section id="contact" className="sec">
          <p className="eyebrow">Let's build something useful</p>
          <h2 className="h">Say hello</h2>
          <p className="muted">Open to MERN stack opportunities.</p>
          <div className="card form">
            <p className="eyebrow">Open to opportunities</p>
            <h3 className="ctitle">Tell me what you are building. I reply to every message.</h3>
            <div className="chips">{chip("Email", `mailto:${me.email}`, true)}{chip("GitHub", me.github)}{chip("LinkedIn", me.linkedin)}</div>
            {sent ? <p className="ok" role="status">Your email app should have opened. If not, write to {me.email}.</p> : (
              <form onSubmit={submit} noValidate>
                {field("name", "Name")}{field("email", "Email")}{field("message", "Message", true)}
                <button className="cta" type="submit">Send message →</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer><b>YASEEN</b><p>Full-stack projects. Shaped in code.</p><p>Designed and built by Yaseen Siddiqui.</p></footer>
    </>
  );
}
