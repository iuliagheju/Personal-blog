from django.shortcuts import redirect, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Post
from .models import Review
from .forms import ReviewForm

def home(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts, 'reviews': reviews})

def index(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts, 'reviews': reviews})

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ReviewForm()
    return render(request, 'submit_review.html', {'form': form})

def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
        return redirect('index')
    else:
     form = ReviewForm(instance=review)
    return render(request, 'update_review.html', {'form': form})

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('home')
    return render(request, 'html/delete_review.html', {'review':review})

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post_detail.html', {'post': post})

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


