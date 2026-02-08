https://roadmap.sh/projects/task-tracker

---

## 🚀 Funcionalidades

- **Modo Interativo**: Um shell dedicado (`>`) para você digitar seus comandos rapidamente.
- **Persistência Automática**: As tarefas são salvas em `storage/tasks-file.json`. Se o arquivo não existir, ele cria para você.
- **CRUD Simples e Completo**: Adicione, liste, atualize descrições e remova tarefas.
- **Controle de Status**: Marque tarefas como "em andamento" ou "concluída".

---

## 🛠️ Como Rodar

Você vai precisar do Node.js instalado (versão 18+ recomendada).

1. **Clone o projeto e entre na pasta:**
   ```bash
   git clone https://github.com/LuanBertozzi7/task-tracker.git
   cd task-tracker
   ```

2. **Instale as dependências (opcional):**
   O projeto usa apenas módulos nativos do Node para rodar, mas se quiser usar as ferramentas de lint/format:
   ```bash
   npm install
   ```

3. **Execute o CLI:**
   ```bash
   npm run dev
   ```

---

## 💻 Guia de Comandos

Ao iniciar, você verá o prompt `>`. Basta digitar os comandos abaixo.
**Dica:** Se o texto da tarefa tiver espaços, use aspas (ex: `"Minha tarefa"`).

### Adicionar Tarefa
```bash
> add "Comprar café"
```

### Listar Tarefas
Mostra todas as tarefas salvas.
```bash
> list
```

### Filtrar por Status
Você pode filtrar por `andamento` ou `concluida`.
```bash
> list andamento
> list concluida
```

### Atualizar Descrição
Muda o texto de uma tarefa existente (precisa do ID).
```bash
> update 1 "Comprar café e açúcar"
```

### Mudar Status
```bash
> mark-in-progress 1
> mark-done 1
```

### Remover Tarefa
Deleta permanentemente a tarefa pelo ID.
```bash
> delete 1
```

### Sair
```bash
> exit
```

---

## 📂 Estrutura do Projeto

Pra quem quiser dar uma fuçar no código:

- **`bin/task-cli.js`**: O coração do CLI. Configura o modo interativo e processa a entrada do usuário.
- **`src/cli/`**: Aqui ficam as funções de cada comando (`add`, `list`, `remove`, etc.).
- **`utilities/`**: Funções para ler e escrever no arquivo JSON (`tasks.create.js`).
- **`storage/`**: Pasta onde o `tasks-file.json` é guardado.

---

