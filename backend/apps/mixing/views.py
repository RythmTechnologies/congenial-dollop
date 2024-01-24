from django.http import HttpResponse, HttpResponseRedirect

# Type Hint
import typing as t
RedirectOrResponse = t.Union[HttpResponseRedirect, HttpResponse]