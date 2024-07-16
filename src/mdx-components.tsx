import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-3xl font-black text-purple-500">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-blue-400">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-orange-400">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg font-thin text-slate-200">{children}</p>
    ),
  }
}