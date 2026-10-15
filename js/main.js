(function () {
  "use strict";
  var D = window.PORTFOLIO;
  if (!D) return;

  // Cria elementos sem innerHTML; ignora valores vazios.
  function h(tag, attrs) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false || v === "") return;
      if (k === "class") el.className = v; else el.setAttribute(k, v);
    });
    Array.prototype.slice.call(arguments, 2).forEach(function add(c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) return c.forEach(add);
      el.append(c);
    });
    return el;
  }
  var $ = function (s) { return document.querySelector(s); };
  var ext = { target: "_blank", rel: "noopener noreferrer" };
  function link(href, text, extra) {
    return h("a", Object.assign({ href: href }, ext, extra), text);
  }
  function list(items, cls) {
    return h("ul", { class: cls }, items.map(function (t) { return h("li", {}, t); }));
  }

  // Tecnologias
  $("#tec").append.apply($("#tec"), D.tecnologias.map(function (g) {
    return h("div", { class: "grp" },
      h("h3", {}, g.grupo),
      g.itens.map(function (i) {
        return h("div", { class: "row" }, h("b", {}, i.nome), h("code", {}, i.exemplo));
      }));
  }));

  // Projetos
  $("#proj").append.apply($("#proj"), D.projetos.map(function (p) {
    var img = p.imagem && p.imagem.src
      ? h("img", { src: p.imagem.src, alt: p.imagem.alt || "", width: p.imagem.largura, height: p.imagem.altura, loading: "lazy", decoding: "async" })
      : null;
    var links = [];
    if (p.codigo) links.push(h("li", {}, link(p.codigo, "Ver código")));
    if (p.demo) links.push(h("li", {}, link(p.demo, "Ver demonstração")));
    return h("article", { class: "card" },
      h("div", { class: "card-bar" },
        h("span", {}, h("i", { "aria-hidden": "true" }), p.nome.toLowerCase().replace(/\s+/g, "-") + "/"),
        h("span", {}, p.status)),
      img,
      h("div", { class: "card-body" },
        h("h3", {}, p.nome),
        h("p", {}, p.problema),
        h("h4", {}, "Já implementado"),
        list(p.feito),
        p.planejado && p.planejado.length ? [h("h4", {}, "Próximos passos"), list(p.planejado, "plan")] : null,
        list(p.tecnologias, "tags"),
        links.length ? h("ul", { class: "links" }, links) : null));
  }));

  // Formação e evolução
  $("#form").append.apply($("#form"), D.formacao.map(function (f) {
    var meta = [f.instituicao, f.periodo].filter(Boolean).join(" · ");
    return h("li", {}, h("h3", {}, f.titulo), meta ? h("small", {}, meta) : null, f.descricao ? h("p", {}, f.descricao) : null);
  }));
  if (D.estudando && D.estudando.length) {
    $("#study").append(h("b", {}, "Estudando agora: "), D.estudando.join(", "));
  } else { $("#study").remove(); }

  // Contato e rodapé
  var c = D.contato || {}, itens = [];
  if (c.github) itens.push(["GitHub", c.github, true]);
  if (c.linkedin) itens.push(["LinkedIn", c.linkedin, true]);
  if (c.email) itens.push(["E-mail", "mailto:" + c.email, false]);
  function fill(sel) {
    $(sel).append.apply($(sel), itens.map(function (i) {
      return h("li", {}, i[2] ? link(i[1], i[0]) : h("a", { href: i[1] }, c.email));
    }));
  }
  fill("#contato-links"); fill("#foot-links");
  $("#foot-nome").textContent = "© " + new Date().getFullYear() + " " + D.nome;

  // Menu mobile
  var btn = $(".menu"), nav = $("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
  });

  // Seção ativa no menu
  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        if (links[en.target.id]) links[en.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
})();
