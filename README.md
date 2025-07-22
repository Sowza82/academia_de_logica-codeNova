# 📘 Guia Oficial de Contribuição — Projeto Colaborativo com Pull Requests

## 🧩 Sobre este Repositório

Este repositório foi criado com o objetivo de **praticar e simular a colaboração em equipe usando o fluxo de Fork + Pull Request**, muito comum em projetos reais, especialmente em código aberto (open source).

Aqui, cada pessoa da equipe vai poder clonar, editar, versionar e contribuir com o projeto de forma organizada, aprendendo na prática os conceitos fundamentais de controle de versão com Git e GitHub.

---

## 🎯 Objetivo deste Guia

- Orientar de forma clara e detalhada o processo de contribuição via Pull Request
- Padronizar o fluxo de trabalho colaborativo
- Evitar conflitos, erros e retrabalho
- Estimular boas práticas profissionais de versionamento e comunicação em equipe

---

## 🧭 Etapas do Fluxo de Contribuição

### 1. Fazer o Fork do Projeto

1. Acesse o repositório principal no GitHub
2. Clique no botão **“Fork”** no canto superior direito da tela
3. O GitHub criará uma cópia deste repositório na sua conta pessoal

---

### 2. Clonar o Fork para sua Máquina

No terminal (Git Bash, VS Code, ou outro terminal que você use):

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO

3. Criar uma Nova Branch para Trabalhar

Antes de começar a codar, crie uma nova branch com um nome descritivo:

git checkout -b nome-da-branch

---

4. Fazer suas Alterações

Realize as alterações, adições ou correções que deseja dentro do projeto.
Utilize um editor como Visual Studio Code, e mantenha a organização dos arquivos.


---
5. Salvar e Subir as Alterações

Depois de finalizar as mudanças:

git add .
git commit -m "feat: descrição objetiva da contribuição"
git push origin nome-da-branch

---
6. Criar o Pull Request (PR)

1. Vá até o seu repositório forkado no GitHub


2. O GitHub já deve exibir um banner com:

> “Compare & pull request” → clique nele




3. Verifique se o destino do PR é a branch principal do repositório original (geralmente main)


4. Preencha os campos:

Título: curto e objetivo (ex: “Resolução do Desafio 01”)

Descrição: explique o que foi feito, como testou, e se há algo a revisar



5. Clique em “Create Pull Request”




---

7. Aguardar Revisão

Um membro da equipe irá revisar o PR

Se estiver tudo certo: será mergeado (adicionado ao projeto)

Se precisar ajustes: será comentado e retornado para você editar



---

📌 Boas Práticas e Convenções

Sempre trabalhe em branches separadas

Nomeie as branches de forma clara (ex: correcao-footer, ajuste-form)

Use mensagens de commit padronizadas (começando com feat:, fix:, refactor:, etc.)

Não edite arquivos de outras pessoas sem combinar antes

Não faça commits na branch main



---

🛠️ Manter o Fork Atualizado (avançado)

Se o projeto original for atualizado e você quiser sincronizar seu fork:

---

git remote add upstream https://github.com/USUARIO-ORIGINAL/REPO-ORIGINAL.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

---

🤝 Nosso Acordo de Contribuição

> Este é um espaço seguro de aprendizado.
Estamos aqui para colaborar, crescer e aprender juntos.
Respeito, empatia e paciência são bem-vindos em cada linha de código. 💜


---

> #VamosDePullRequest 🚀

— Equipe CodeNova 🧑🏾‍💻
