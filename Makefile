# ─── Config ───────────────────────────────────────────────────────────────────
WITH_NVM = export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && . "$$NVM_DIR/nvm.sh"; \
	nvm use --silent;

.PHONY: setup start build preview nvm.init node.init app.install

# ─── Public targets ───────────────────────────────────────────────────────────
setup: nvm.init node.init app.install

start: setup
	@$(WITH_NVM) npm run dev

build: setup
	@$(WITH_NVM) npm run build

preview: setup
	@$(WITH_NVM) npm run preview

nvm.init:
	@if [ ! -d "$$HOME/.nvm" ]; then \
		echo "📦 nvm not found → installing..."; \
		curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash; \
	fi
	@export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && . "$$NVM_DIR/nvm.sh"; \
	nvm --version > /dev/null 2>&1 && echo "✅ nvm=$$(nvm --version)" || echo "⚠️  restart your shell then re-run make"

node.init:
	@export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && . "$$NVM_DIR/nvm.sh"; \
	if ! nvm ls $$(cat .nvmrc) 2>/dev/null | grep -q "v$$(cat .nvmrc)"; then \
		echo "📦 Node $$(cat .nvmrc) not found → installing via nvm..."; \
		nvm install; \
	fi; \
	nvm use --silent; \
	echo "✅ node=$$(node -v) npm=$$(npm -v)"

app.install:
	@$(WITH_NVM) npm ci
