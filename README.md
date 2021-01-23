# Navegação por tabs

**Script javaScript para implementar navegação por tabs em qualquer site.**


![Feature image](https://lh3.googleusercontent.com/zqRubyc9x6BdjrhQs-o9cPZMIM5JmQXDBEst7rDG4zZSIklq39YNZUV0C_-4Af3iDoU87KS6ZwYqC0Cqa4RKm-KmfIyKmn7_WjBZIltqT-94TgVm6_PpL-usQwOJltmPYh1k_7AIDHCRBoV0UTNV6XTvrT9WDUm48gufGh3vJD7rLvyIFkKgHfq3Guu2FKscNqn5s3eYtkfnbgDiFf36fhNjk2kN1NWfmJGSrPTGduBYHYRQ23tbBHzj589D9bEFEfIAz-q5xX42nOXWQKcYffxYr91Zr9J-gIhTN5pMQny2cpSnJinZWaSp5M5A6iI6tOVeAt55mEuFlG-8Uk9_b6jNMWyR12FBeXsbiEt2JS8OJ43ogQHXm01dNj5wXlhVvway2uFCg_8LEL86H0VMxb74-Cc6vFk7DVmOVvZoB1yVM6LMhvT4GaVp3q2okzkS56A51L7C-encldmEzROJh7Monr8pmqVubopNaXv7qY06tfEVotqmYpxNk-p5gOyJNZwlXHxidDII9KwU1M1G1ZZJcP5E6W9tlnQwcTKtJ7DbdzJwRHvdrfZai8UA8Ffv0EK11xpPoOQLWJZHl580sNsaXakqdS6aAQdmlUliI6Qj4baLGYfWORrK6-KX9_R80I1VCZ2a7U-gpp67Y07zi2VsloX5GkGC8opxXKO--XLS7ydDtII-5taFJFx4kw=w676-h499-no?authuser=0)


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
