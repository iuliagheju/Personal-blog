from django.shortcuts import render, HttpResponse
from django.shortcuts import get_object_or_404, render
from .models import Post

def home(request):
    posts = Post.objects.all()
    return render(request, 'index.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'post_detail.html', {'post': post})

def index(request):
    return render(request, "index.html")

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')
def form(request):
    return render(request, 'form.html')

def gallery(request):
    return render(request, 'gallery.html')

def chatbot(request):
    return render(request, 'chatbot.html')
