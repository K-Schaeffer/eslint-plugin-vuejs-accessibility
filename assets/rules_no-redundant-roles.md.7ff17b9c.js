import{_ as s,v as a,b as n,R as e}from"./chunks/framework.3315ec34.js";const u=JSON.parse('{"title":"no-redundant-roles","description":"","frontmatter":{},"headers":[],"relativePath":"rules/no-redundant-roles.md","filePath":"rules/no-redundant-roles.md"}'),l={name:"rules/no-redundant-roles.md"},o=e(`<h1 id="no-redundant-roles" tabindex="-1">no-redundant-roles <a class="header-anchor" href="#no-redundant-roles" aria-label="Permalink to &quot;no-redundant-roles&quot;">​</a></h1><p>Some HTML elements have native semantics that are implemented by the browser. This includes default/implicit ARIA roles. Setting an ARIA role that matches its default/implicit role is redundant since it is already set by the browser.</p><h2 id="🔧-options" tabindex="-1">🔧 Options <a class="header-anchor" href="#🔧-options" aria-label="Permalink to &quot;🔧 Options&quot;">​</a></h2><p>The default options for this rule allow an implicit role of <code>navigation</code> to be applied to a <code>nav</code> element as is <a href="https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element#Example:The_.3Cnav.3E_element" target="_blank" rel="noreferrer">advised by W3</a>. The options are provided as an object keyed by HTML element name; the value is an array of implicit ARIA roles that are allowed on the specified element.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">vuejs-accessibility/no-redundant-roles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">nav</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">navigation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="✔-succeed" tabindex="-1">✔ Succeed <a class="header-anchor" href="#✔-succeed" aria-label="Permalink to &quot;✔ Succeed&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">role</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">presentation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="❌-fail" tabindex="-1">❌ Fail <a class="header-anchor" href="#❌-fail" aria-label="Permalink to &quot;❌ Fail&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">role</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">role</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="📚-resources" tabindex="-1">📚 Resources <a class="header-anchor" href="#📚-resources" aria-label="Permalink to &quot;📚 Resources&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/html5/dom.html#aria-role-attribute" target="_blank" rel="noreferrer">W3</a></li></ul>`,11),t=[o];function p(r,c,i,D,F,y){return a(),n("div",null,t)}const h=s(l,[["render",p]]);export{u as __pageData,h as default};
