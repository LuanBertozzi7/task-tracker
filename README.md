# task-tracker (CLI)

CLI simples para **rastrear e gerenciar tarefas** (todo / in-progress / done) com **persistência em arquivo JSON**.

Desafio de referência: https://roadmap.sh/projects/task-tracker

---

## Requisitos atendidos

- Executa via **linha de comando**
- Aceita **ações e entradas** como argumentos
- Armazena as tarefas em um **arquivo JSON**
- Permite:
  - adicionar, atualizar e excluir tarefas
  - marcar tarefa como **em andamento** ou **feita**
  - listar todas as tarefas
  - listar tarefas por status: `done`, `todo`, `in-progress`

---

## Stack

- Node.js (>= 18 recomendado)
- JavaScript
- `fs` / `path` (File System) para persistência

---

## Estrutura sugerida do projeto

> Você pode adaptar, mas esta estrutura facilita manutenção.

```
task-tracker/
  ├─ src/
  │  ├─ cli.js            # ponto de entrada (parse de args / roteamento)
  │  ├─ store.js          # ler/escrever tasks.json
  │  ├─ tasks.js          # regras de negócio (CRUD + status)
  │  └─ format.js         # formatação de saída (listagem bonita)
  ├─ tasks.json           # banco de dados local (criado automaticamente se não existir)
  ├─ package.json
  └─ README.md
```

---

## Modelo de dados

Cada tarefa deve conter:

```json
{
  "id": 1,
  "description": "Estudar Node.js",
  "status": "todo",
  "createdAt": "2026-02-05T14:30:00.000Z",
  "updatedAt": "2026-02-05T14:30:00.000Z"
}
```

Campos:

- `id` (number): incremental e único
- `description` (string): texto da tarefa
- `status` (string): `todo` | `in-progress` | `done`
- `createdAt` / `updatedAt` (string ISO): timestamps

---

## Instalação

1. Crie o projeto e inicialize o npm:

```bash
mkdir task-tracker
cd task-tracker
npm init -y
```

2. Crie o ponto de entrada (ex.: `src/cli.js`) e configure um script:

```json
{
  "scripts": {
    "task": "node src/cli.js"
  }
}
```

3. (Opcional) Torne “executável” como comando:

- No topo do `src/cli.js`, adicione:

```js
#!/usr/bin/env node
```

- E no `package.json`, exponha o bin:

```json
{
  "bin": {
    "task-tracker": "src/cli.js"
  }
}
```

Depois rode:

```bash
npm link
```

Aí você poderá usar `task-tracker ...` em vez de `node src/cli.js ...`.

---

## Uso (comandos)

A CLI segue o formato:

```bash
node src/cli.js <comando> [argumentos]
```

ou, se você criou o script:

```bash
npm run task -- <comando> [argumentos]
```

### Adicionar tarefa

```bash
npm run task -- add "Comprar pão"
```

### Atualizar tarefa (descrição)

```bash
npm run task -- update 1 "Comprar pão integral"
```

### Excluir tarefa

```bash
npm run task -- delete 1
```

### Marcar como em andamento

```bash
npm run task -- mark-in-progress 2
```

### Marcar como concluída

```bash
npm run task -- mark-done 2
```

### Listar tarefas

```bash
npm run task -- list
```

### Listar por status

```bash
npm run task -- list todo
npm run task -- list in-progress
npm run task -- list done
```

---

## Saída esperada (exemplo)

Você pode imprimir no terminal algo como:

```
[1] (todo) Estudar Node.js
[2] (in-progress) Implementar store JSON
[3] (done) Criar comandos CLI
```

---

## Regras e validações recomendadas

- Se o usuário tentar atualizar/deletar um `id` que não existe → mostrar mensagem clara e sair com código != 0
- Se o usuário não passar argumentos necessários → mostrar `help/uso`
- Criar `tasks.json` automaticamente se não existir
- Não permitir `description` vazia
- Status válido apenas: `todo`, `in-progress`, `done`

---

## Etapas de implementação (passo a passo)

1. **Parse de argumentos**
   - Ler `process.argv.slice(2)` e extrair `command` e `args`.

2. **Persistência**
   - Implementar `loadTasks()` e `saveTasks(tasks)` em `store.js`.
   - Se `tasks.json` não existir, iniciar com `[]`.

3. **CRUD**
   - `addTask(description)`
   - `updateTask(id, description)`
   - `deleteTask(id)`
   - Cada operação atualiza `updatedAt` (e `createdAt` no add).

4. **Status**
   - `markInProgress(id)` define `status = "in-progress"`
   - `markDone(id)` define `status = "done"`

5. **Listagem**
   - `listTasks()` (todas)
   - `listTasksByStatus(status)` (filtro)

6. **Mensagens e erros**
   - Mensagens curtas, claras, sempre informando o que aconteceu
   - `process.exit(1)` em erro de uso/validação

7. **Polimento**
   - Formatar lista com colchetes e status
   - (Opcional) ordenar por `id`

---

## Ideias de extensões (opcional)

- Prioridade: `low | medium | high`
- Data de vencimento (`dueDate`)
- Tags (`tags: string[]`)
- Busca (`search "<texto>"`)
- Exportar CSV
- Arquivo configurável (ex.: `--file ./minhas-tarefas.json`)

---

## Licença

Uso educacional / portfólio.
