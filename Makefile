NOMBRE="ember-cli-photon"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

define log
	@echo "${G}▷$(1) ${N}"
endef

define task
	@echo ""
	@echo "${Y}-$(1)${N}"
endef

comandos:
	@echo ""
	@echo "${B}Commands for ${Y}${NOMBRE}${N}"
	@echo ""
	@echo "  ${Y}Devs${N}"
	@echo ""
	@echo "    ${G}deploy${N}                Deploy demo site."
	@echo "    ${G}test${N}                  Run test commands."
	@echo ""

test:
	$(call log, "Running tests...")
	@ember test

deploy:
	$(all task, "Building to gh-pages branch.")
	@ember deploy production
	@echo "Done, check https://github.com/hugoruscitti/ember-cli-photon"

.PHONY: tmp
