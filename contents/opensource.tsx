import { Project } from '@lib/types';

export const projects: Project[] = [
  {
    title: 'Rust-analyzer',
    description: (
      <p>
        <strong>Rust-analyzer</strong> is an implementation of Language Server Protocol for the Rust
        programming language. It provides features like completion and goto definition for many code
        editors, including VS Code, Emacs and Vim.
      </p>
    ),
    logo: 'rust-analyzer.svg',
    github: 'https://github.com/rust-analyzer/rust-analyzer',
    website: 'https://rust-analyzer.github.io/'
  },
  {
    title: 'Haskell IDE Engine',
    description: (
      <p>
        <strong>Haskell IDE Engine</strong> aims to be the universal interface to a growing number of Haskell tools,
        providing a fully-featured Language Server Protocol server for editors and IDEs that require
        Haskell-specific functionality.
      </p>
    ),
    logo: 'haskell-ide-engine.svg',
    github: 'https://github.com/haskell/haskell-ide-engine',
  },
  {
    title: 'ElixirLS',
    description: <p>
        <strong>ElixirLS</strong> is a frontend-independent IDE "smartness" server for Elixir. Implements the "Language Server Protocol" standard and provides debugger support via the "Debug Adapter Protocol"
    </p>,
    logo: 'elixirls.svg',
    github: 'https://github.com/elixir-lsp/elixir-ls',
  },
  {
    title: 'Ionide',
    description: <p>
        <strong>Ionide</strong> is an organization which builds high quality, cross platform developer tools for F#. Our flagship project is Ionide-VSCode - a Visual Studio Code plugin, with more than 1 million downloads, transforming VSCode into a fully-fledged F# IDE
    </p>,
    logo: 'ionide.svg',
    github: 'https://github.com/ionide',
    website: 'https://ionide.io/'
  }
];
