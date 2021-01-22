# Navegação por tabs

**Script javaScript para implementar navegação por tabs em qualquer site.**

Para que o programa funcione corretamente é preciso seguir a seguinte estrutura no html:

~~~html
<div  class="tab-links">
	<button  data-id="html"  data-open>HTML</button>
	<button  data-id="css">CSS</button>
	<button  data-id="javascript">javaScript</button>
</div>
~~~

~~~html
<div  class="tab-content">
	<section  id="html">
		<h2>Sobre o HTML</h2>
		<p>HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de
		Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web.
		</p>
	</section>

	<section  id="css">
		<h2>Sobre o CSS</h2>
		<p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
		<p>O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags STYLE</p>
	</section>

	<section  id="javascript">
		<h2>Sobre o javaScript</h2>
		<p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com
		tipagem dinâmica fraca e multiparadigma.</p>
	</section>
</div>
~~~

Os valores das propriedade data-id dos links devem corresponder respectivamente com os valores dos ID's das seções de conteúdo.
