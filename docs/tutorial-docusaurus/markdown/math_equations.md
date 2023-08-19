---
sidebar_position: 1
---
## 基础

### 安装
```shell
pnpm add remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```
### 配置
```js
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Docusaurus',
  tagline: 'Build optimized websites quickly, focus on your content',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
```
## usage
### inline mode

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

### display mode

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

## 参考
1. [Mathematical expressions](https://www.overleaf.com/learn/latex/Mathematical_expressions#Display_math_mode)
2. [Math Equations](https://docusaurus.io/docs/markdown-features/math-equations)
3. [katex](https://katex.org/docs/api)